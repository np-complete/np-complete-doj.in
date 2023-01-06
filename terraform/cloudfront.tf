locals {
  s3_origin_id = "np-complet-doj.in-s3-origin"
}

data "aws_acm_certificate" "np-complete-cert" {
  provider = aws.global
  domain   = "np-complete-doj.in"
}

resource "aws_cloudfront_origin_access_control" "np-complete" {
  name                              = "s3-origin-access-control-for-np-complete"
  description                       = ""
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

resource "aws_cloudfront_distribution" "np-complete" {
  origin {
    domain_name              = aws_s3_bucket.np-complete-website.bucket_regional_domain_name
    origin_access_control_id = aws_cloudfront_origin_access_control.np-complete.id
    origin_id                = local.s3_origin_id
  }

  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"
  aliases             = ["np-complete-doj.in"]

  default_cache_behavior {
    target_origin_id       = local.s3_origin_id
    allowed_methods        = ["GET", "HEAD", "OPTIONS"]
    cached_methods         = ["GET", "HEAD"]
    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400
    compress               = true
    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }
  }

  viewer_certificate {
    acm_certificate_arn      = data.aws_acm_certificate.np-complete-cert.arn
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1.2_2021"
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  tags = {
    Project = "np-complete"
  }
}
