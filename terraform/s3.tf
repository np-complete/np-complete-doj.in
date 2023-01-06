resource "aws_s3_bucket" "np-complete-website" {
  bucket = "np-complete-doj.in"
  tags = {
    Project = "np-complete"
  }
}
