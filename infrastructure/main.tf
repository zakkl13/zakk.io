provider "aws" {
    region = "us-east-1"
}
module "zakk-io-bucket" {
    source = "modules/static-web-s3"
    name = "${var.site-bucket-name}"
}
