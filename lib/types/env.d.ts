// process.env拡張
declare namespace NodeJS {
  interface ProcessEnv {
    readonly ENV: 'prod' | 'stage' | 'dev';
  }
}
