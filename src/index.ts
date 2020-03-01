import {Proser3BeStarterApplication} from './application';
import {ApplicationConfig} from '@loopback/core';

export {Proser3BeStarterApplication as Loopback4StarterApplication};

export async function main(options: ApplicationConfig = {}) {
  const app = new Proser3BeStarterApplication(options);
  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  return app;
}
