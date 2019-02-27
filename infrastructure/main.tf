provider "aws" {
    region = "us-east-1"
}
module "zakk-io-bucket" {
    source = "modules/static-web-s3"
    name = "${var.site-bucket-name}"
}

resource "aws_route53_record" "zakk-io" {
    zone_id = "${var.zakk-io-hosted-zone}"
    name = "zakk.io"
    type = "A"

    alias {
        name = "s3-website-us-east-1.amazonaws.com"
        zone_id = "Z3AQBSTGFYJSTF"
        evaluate_target_health = false
    }
}