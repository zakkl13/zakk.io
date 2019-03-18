provider "aws" {
    region = "us-east-1"
}
module "zakk-io-bucket" {
    source = "modules/static-web-s3"
    name = "${var.site-bucket-name}"
}

resource "aws_cloudfront_distribution" "s3_distribution" {
  origin {
    domain_name = "${module.zakk-io-bucket.bucket_dns_name}"
    origin_id   = "S3Origin"

    s3_origin_config {
        origin_access_identity = "origin-access-identity/cloudfront/E3UR6A2AHQOK0U"
    }
  }

  enabled             = true
  is_ipv6_enabled     = true
  comment             = "comment"
  default_root_object = "index.html"

  aliases = ["zakk.io"]

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD", "OPTIONS"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "S3Origin"

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }

      headers = ["accept-encoding"]
    }

    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400
    compress = true
  }

   price_class = "PriceClass_100"

   restrictions {
       geo_restriction {
        restriction_type = "none"
       }
   }

  viewer_certificate {
    acm_certificate_arn = "${var.zakk-io-cert-arn}"
    minimum_protocol_version = "TLSv1.1_2016"
    ssl_support_method = "sni-only"
  }
}
