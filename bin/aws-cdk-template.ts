#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';

import { AwsCdkStack } from '../lib/aws-cdk-template-stack';
import { Env, getConfig } from '../lib/config';

const app = new cdk.App();
const env = app.node.tryGetContext('env') as Env;
const config = getConfig(env);

new AwsCdkStack(app, 'Stack', {
  stackName: `${config.prefix}-stack`,
  description: config.description,
  env: {
    account: process.env.AWS_ACCOUNT,
    region: process.env.AWS_REGION,
  },
  config,
});
