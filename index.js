/* global __dirname process require */

const path = require("path");
const ajv = new (require("ajv"))();
const Server = require("./server");

/*
--- Constants ---
*/

const cwd = __dirname;
const configPath = path.join(cwd, "config", "config-server.json");
const schemaPath = path.join(cwd, "config", "config-server-schema.json");
const config = require(configPath);
const schema = require(schemaPath);

/*
--- Config validation ---
*/

if (!ajv.validate(schema, config)) {
  console.error(ajv.errorsText(ajv.errors, { dataVar: "config-server.json" }));
  process.exit(1);
}

const server = new Server(config, cwd);
server.start().then(() => {
  if (!server.silent) {
    console.log(`Listening on http://localhost:${config.port}/`);
  }

  if (process.env.NODE_ENV !== "production" && !server.silent) {
    require("opn")(`http://localhost:${config.port}/`);
  }
});
