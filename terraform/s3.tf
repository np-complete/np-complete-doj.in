resource "aws_s3_bucket" "website-bucket" {
  bucket = "np-complete-doj.in"
  tags = {
    Project = "np-complete"
  }
}
