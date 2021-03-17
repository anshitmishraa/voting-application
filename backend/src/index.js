const Express = require("express");
const setupRouter = require("./setup/router");
const setupRedis = require("./setup/redis");
const setupMiddleware = require("./setup/middleware");
const setupDatabase = require("./setup/database");

const app = Express();

setupMiddleware(app);

async function start() {
  const db = await setupDatabase();
  const redisDb = await setupRedis();

  setupRouter(app, db, redisDb);
  console.log("Database Connected");
  app.listen(4000, () => {
    console.log("Server Started");
  });
}

start().catch(console.error);
