data "aws_route53_zone" "np-complete" {
  name = "np-complete-doj.in"
}

resource "aws_route53_record" "np-compete-a" {
  zone_id = data.aws_route53_zone.np-complete.zone_id
  name    = "np-complete-doj.in"
  type    = "A"

  alias {
    evaluate_target_health = false
    name                   = aws_cloudfront_distribution.np-complete.domain_name
    zone_id                = aws_cloudfront_distribution.np-complete.hosted_zone_id
  }
}

resource "aws_route53_record" "np-compete-aaaa" {
  zone_id = data.aws_route53_zone.np-complete.zone_id
  name    = "np-complete-doj.in"
  type    = "AAAA"

  alias {
    evaluate_target_health = false
    name                   = aws_cloudfront_distribution.np-complete.domain_name
    zone_id                = aws_cloudfront_distribution.np-complete.hosted_zone_id
  }
}
