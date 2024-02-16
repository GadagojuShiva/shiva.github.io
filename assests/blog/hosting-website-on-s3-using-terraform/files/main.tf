resource "aws_s3_bucket" "example-bucket" {
  bucket = var.aws_s3_bucket_name
}
resource "aws_s3_bucket_ownership_controls" "example" {
  bucket = aws_s3_bucket.example-bucket.id

  rule {
    object_ownership = "BucketOwnerPreferred"
  }
}
resource "aws_s3_bucket_public_access_block" "example" {
  bucket = aws_s3_bucket.example-bucket.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}
resource "aws_s3_bucket_acl" "example" {
  bucket = aws_s3_bucket.example-bucket.id
  acl    = "public-read"
}
resource "aws_s3_object" "object" {
  bucket = aws_s3_bucket.example-bucket.id
  key    = "index.html"
  source = "./portfolio/index.html"
  acl = "public-read"
  content_type = "text/html"
}
resource "aws_s3_object" "object" {
  bucket = aws_s3_bucket.example-bucket.id
  key    = "error.html"
  source = "./portfolio/error.html"
  acl = "public-read"
  content_type = "text/html"
}

resource "aws_s3_bucket_website_configuration" "myconfig" { 
    bucket = aws_s3_bucket.example-bucket.id

    index_document {
      suffix = "index.html"
    }
    error_document {
      key = "error.html"
    }
    depends_on = [ aws_s3_bucket_acl.example ]
}