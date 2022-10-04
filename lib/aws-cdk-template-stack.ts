import * as cdk from 'aws-cdk-lib';

import type { Config } from './config';
import type { Construct } from 'constructs';

interface CustomStackProps extends cdk.StackProps {
  config: Config;
}

export class AwsCdkTemplateStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: CustomStackProps) {
    super(scope, id, props);

    console.log(props?.config.greet);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'AwsCdkTemplateQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300),
    // });
  }
}
