terraform {
#   specifies the minimum version of Terraform required to use this configuration.
#  version for our cli
  required_version = ">= 1.5.0"  
}

# aws main file
provider "aws" {
  region = var.aws_region # Use the variable defined in variables.tf
}

# s3 bucket
resource "aws_s3_bucket" "demo-bucket" {
  bucket = "demo_bucket_123" #use a unique bucket name
  acl = "private"  #change the acl mode from public-read to private
}

# server
resource "aws_instance" "web" {  #"web" is the label for this resource
  ami = "ami-0c02fb55956c7d316"
  instance_type = "t2.micro"
  key_name = "my-key"
  tags = {
    Name = "srv" #server
    Env = "prod"
  }
}

output "bucket" {
  value = aws_s3_bucket.demo_bucket.bucket #output the bucket name
}

