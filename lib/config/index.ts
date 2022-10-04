import devConfig from './dev';
import prodConfig from './prod';

export type Env = 'prod' | 'dev';

export interface Config {
  env: Env;
  name: string;
  description: string;
  greet: string;
}

export function getConfig(env: Env): Config {
  const name = `${process.env.PROJECT_NAME}-${env}`;
  const description = `${process.env.PROJECT_NAME} stack for ${env}`;

  return {
    env,
    name,
    description,
    ...(env === 'prod' ? prodConfig : devConfig),
  };
}
