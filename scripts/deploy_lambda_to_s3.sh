#!/bin/bash
s3BucketName=$(aws cloudformation describe-stack-resource --stack-name s3 --logical-resource-id LambdaCodeBucket --query StackResourceDetail.PhysicalResourceId)
s3BucketName="${s3BucketName%\"}"
s3BucketName="${s3BucketName#\"}"
echo $s3BucketName

for lambda in lambdas/*; do
  for zip in $lambda; do 
    echo $zip
  done
  echo $dir
done

aws s3 cp ./conn_test.zip s3://$s3BucketName/lambdas/
