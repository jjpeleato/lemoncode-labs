declare namespace NodeJS {
  interface ProcessEnv {
    API_BASE_URL: string;
    ENVIRONMENT: string;
  }
}
declare module "*.scss" {
  const content: { [className: string]: string };
  export default content;
}

declare module "*.svg" {
  const content: string;
  export default content;
}
