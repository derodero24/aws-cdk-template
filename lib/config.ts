export type Env = 'prod' | 'dev';

export interface Config {
  env: Env;
  description: string;
  prefix: string;
}

export function getConfig(env: Env): Config {
  const description = `Stack for AWS CDK Template (${env})`;
  const prefix = `aws-cdk-template-${env}`;

  return {
    env,
    description,
    prefix,
  };
}
