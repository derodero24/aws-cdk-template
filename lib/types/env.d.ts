// process.env拡張
declare namespace NodeJS {
  interface ProcessEnv {
    readonly PROJECT_NAME: string;
  }
}
