terraform {
#   specifies the minimum version of Terraform required to use this configuration.
#  version for our cli
  required_version = ">= 1.5.0"  
}

# setting up your cloud provider and the region
provider "aws"{
    region = var.aws_region
}

#set up your resources
resource "aws_s3_bucket" "demo_bucket" {
  bucket = "wth-advanced-demo-bucket"
}


