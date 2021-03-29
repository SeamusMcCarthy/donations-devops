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

  findOne: {
    auth: false,
    handler: async function (request, h) {
      const candidate = await Candidate.findOne({ _id: request.params.id });
      return candidate;
    },
  },
};

module.exports = Candidates;
