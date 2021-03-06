"use strict";

const Accounts = require("./app/controllers/accounts");
const Donations = require("./app/controllers/donations");
const os = require("os");

module.exports = [
  { method: "GET", path: "/", config: Accounts.index },
  { method: "GET", path: "/signup", config: Accounts.showSignup },
  { method: "POST", path: "/signup", config: Accounts.signup },
  { method: "GET", path: "/login", config: Accounts.showLogin },
  { method: "POST", path: "/login", config: Accounts.login },

  { method: "GET", path: "/logout", config: Accounts.logout },
  { method: "POST", path: "/donate", config: Donations.donate },
  { method: "GET", path: "/home", config: Donations.home },
  { method: "GET", path: "/report", config: Donations.report },
  { method: "GET", path: "/settings", config: Accounts.showSettings },
  { method: "POST", path: "/settings", config: Accounts.settings },

  {
    method: "GET",
    path: "/{param*}",
    handler: {
      directory: {
        path: "./public",
      },
    },
    options: { auth: false },
  },

  {
    method: "GET",
    path: "/testlb",
    config: Accounts.testlb,
  },
];
