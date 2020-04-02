"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.echoHelpTexts = void 0;

var _index = require("../utils/index.js");

var echoHelpTexts = function echoHelpTexts() {
  console.info(_index.log.dim("Bearicorn is script runner of docker-based pay-as-you-go auto-scale tool"));
  console.info("\n  init        ".concat(_index.log.dim("Link your Cli to your cloud online account", false), "\n  push        ").concat(_index.log.dim("Push an image or a repository to a registry", false), "\n  pull        ").concat(_index.log.dim("Unlinks this cli from your online cloud account", false), "\n  config      ").concat(_index.log.dim("Config your account", false), "\n  app         ").concat(_index.log.dim("Apps have hardware, urls and possibility to deploy an image", false), "\n  image       ").concat(_index.log.dim("Images are multiple versions of your code", false), "\n  stats       ").concat(_index.log.dim("Display statistics of app your apps", false), "\n  logout      ").concat(_index.log.dim("Unlinks this cli from your online cloud account", false), "\n  version     ").concat(_index.log.dim("Show the Docker version information", false), "\n  hello       ").concat(_index.log.dim("Creates example of app in multiple languages", false), "\n  "));
};

exports.echoHelpTexts = echoHelpTexts;