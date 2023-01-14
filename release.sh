aws --profile $RICSIBOARD_PROFILE cloudfront create-invalidation --distribution-id $RICSIBOARD_CLOUDFRONT_DISTRIBUTION_ID --paths "/*"
