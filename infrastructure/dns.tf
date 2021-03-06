
resource "aws_route53_record" "zakk-io" {
    zone_id = "${var.zakk-io-hosted-zone}"
    name = "zakk.io"
    type = "A"

    alias {
        name = "${aws_cloudfront_distribution.s3_distribution.domain_name}"
        zone_id = "${aws_cloudfront_distribution.s3_distribution.hosted_zone_id}"
        evaluate_target_health = false
    }
}

resource "aws_route53_record" "acm-zakk-io" {
    zone_id = "${var.zakk-io-hosted-zone}"
    name = "_c90646b5f4bbe81460e5cc222aba7a38.zakk.io"
    type = "CNAME"
    ttl = "14400"
    records = ["_1d7a14c8d80f2969acd8002e96dd9a4a.hkvuiqjoua.acm-validations.aws"]
}