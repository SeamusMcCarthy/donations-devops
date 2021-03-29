"use strict";

const Candidate = require("../models/candidate");

const Candidates = {
  find: {
    auth: false,
    handler: async function (request, h) {
      const candidates = await Candidate.find();
      return candidates;
    },
  },
};

module.exports = Candidates;
