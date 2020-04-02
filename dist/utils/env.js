"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.secret = secret;

require("dotenv/config.js");

function secret() {
  return process.env.MY_SECRET;
}