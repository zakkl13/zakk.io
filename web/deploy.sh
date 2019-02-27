ng build --prod
aws s3 sync ./dist/web/ s3://zakk.io/