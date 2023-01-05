terraform {
  backend "s3" {
    bucket         = "masarakki-infra"
    key            = "terraform/np-coplete.tfstate"
    region         = "us-west-2"
    dynamodb_table = "terraform_locks"
  }
}
