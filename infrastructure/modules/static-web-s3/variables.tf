resource "aws_s3_bucket" "site-bucket" {
    bucket = "${var.name}"
    acl = "public-read"
    policy = "${file("bucket-access-policy.json")}"
    website {
        index_document = "index.html"
        error_document = "index.html"
    }
}