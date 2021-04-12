"use strict";

const Donation = require("../models/donation");
const Boom = require("@hapi/boom");

const Donations = {
  find: {
    auth: false,
    handler: async function (request, h) {
      const donations = await Donation.find();
      return donations;
    },
  },
};

module.exports = Donations;