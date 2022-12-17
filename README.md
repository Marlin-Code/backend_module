# backend-module

### Notes
- SAM requires a management bucket. you can add the `--resolve-s3` option to have it automatically create a managed bucket.



### Resources
- [Installing the SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/install-sam-cli.html)
- 


### Useful Commands
``` sh
sam deploy --template ./infrastructure/serverless.yml --stack-name serverless-stack --capabilities CAPABILITY_IAM


```
