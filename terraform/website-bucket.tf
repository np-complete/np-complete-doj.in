resource "aws_s3_bucket" "np-complete-website" {
  bucket = "np-complete-doj.in"
  tags = {
    Project = "np-complete"
  }
}

resource "aws_s3_bucket_acl" "np-complete-website-acl" {
  bucket = aws_s3_bucket.np-complete-website.id
  acl    = "private"
}
