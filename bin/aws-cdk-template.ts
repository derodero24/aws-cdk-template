#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';

import { AwsCdkTemplateStack } from '../lib/aws-cdk-template-stack';

const app = new cdk.App();
new AwsCdkTemplateStack(app, 'AwsCdkTemplateStack', {
  env: {
    account: process.env['CDK_DEFAULT_ACCOUNT'],
    region: process.env['CDK_DEFAULT_REGION'],
  },
});
