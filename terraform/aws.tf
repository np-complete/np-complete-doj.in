terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.0"
    }
  }
  backend "s3" {
    bucket         = "masarakki-infra"
    key            = "terraform/np-complete.tfstate"
    region         = "us-west-2"
    dynamodb_table = "terraform_locks"
  }
}

provider "aws" {
  profile = "default"
  region  = "us-west-2"
}

provider "aws" {
  region = "us-east-1"
  alias  = "global"
}
