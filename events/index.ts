import { Whatsapp } from "venom-bot";
import fs from "fs";
import path from "path";

const files = fs.readdirSync(__dirname);

const events = files.reduce((acc: any[], fileName: string) => {

  const filePath = path.resolve(__dirname, fileName);

  if (fileName !== "index.ts") {
    acc.push(require(filePath));
  }

  return acc;

}, [])


export function hookEvents(client: Whatsapp) {

  // hook events to client

  events.forEach((event: any) => {
    event.hook(client);
  })

  return client;
}