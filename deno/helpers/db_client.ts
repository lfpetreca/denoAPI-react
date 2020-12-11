import { Database, MongoClient } from "https://deno.land/x/mongo@v1.0.0/mod.ts";

let db: Database;

export function connect() {
  const client = new MongoClient();
  client.connectWithUri(
    "mongodb+srv://nodeJsUser:mmfgLXb3VpM90JxU@mongodbtonodejs.ierrz.gcp.mongodb.net/deno?retryWrites=true&w=majority",
  );

  const db = client.database("todo-app");
}

export function getDb() {
  return db;
}
