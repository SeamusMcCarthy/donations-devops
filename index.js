"use strict";

require("./app/models/db");

const Hapi = require("@hapi/hapi");
const Cookie = require("@hapi/cookie");
const Inert = require("@hapi/inert");
const Vision = require("@hapi/vision");
const Handlebars = require("handlebars");
const Joi = require("@hapi/joi");

const server = Hapi.server({
  port: process.env.port || 3000,
});

async function init() {
  await server.register(Cookie);
  await server.register(Inert);
  await server.register(Vision);
  server.validator(require("@hapi/joi"));

  server.views({
    engines: {
      hbs: Handlebars,
    },
    relativeTo: __dirname,
    path: "./app/views",
    layoutPath: "./app/views/layouts",
    partialsPath: "./app/views/partials",
    layout: true,
    isCached: false,
  });

  const env = require("dotenv");
  const result = env.config();
  if (result.error) {
    console.log(result.error.message);
    process.exit(1);
  }

  server.auth.strategy("session", "cookie", {
    cookie: {
      name: process.env.cookie_name,
      password: process.env.cookie_password,
      isSecure: false,
    },
    redirectTo: "/",
  });
  server.auth.default("session");

  server.route(require("./routes"));

  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
}

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();
