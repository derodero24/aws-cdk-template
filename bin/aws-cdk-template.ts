#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';

import { AwsCdkTemplateStack } from '../lib/aws-cdk-template-stack';
import { Env, getConfig } from '../lib/config';

const app = new cdk.App();

// Config
const env = app.node.tryGetContext('env') as Env;
const config = getConfig(env);

new AwsCdkTemplateStack(app, config.name, {
  env: {
    account: process.env.AWS_ACCOUNT,
    region: process.env.AWS_REGION,
  },
  description: config.description,
  config,
});
