resource "aws_cloudfront_origin_access_control" "np-complete" {
  name                              = "s3-origin-access-control-for-np-complete"
  description                       = ""
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}
