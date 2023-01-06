resource "aws_s3_bucket" "np-complete-website" {
  bucket = "np-complete-doj.in"
  tags = {
    Project = "np-complete"
  }
}

resource "aws_s3_bucket_policy" "np-complete-website" {
  bucket = aws_s3_bucket.np-complete-website.id
  policy = data.aws_iam_policy_document.np-complete-website.json

}

data "aws_iam_policy_document" "np-complete-website" {
  statement {
    effect = "Allow"
    principals {
      type        = "Service"
      identifiers = ["cloudfront.amazonaws.com"]
    }
    actions = [
      "s3:GetObject"
    ]
    resources = [
      "${aws_s3_bucket.np-complete-website.arn}/*"
    ]
    condition {
      test     = "StringEquals"
      variable = "AWS:SourceArn"
      values   = [aws_cloudfront_distribution.np-complete.arn]
    }
  }
}
