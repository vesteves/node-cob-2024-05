"use strict";

/**
 * turma service
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::turma.turma", ({ strapi }) => ({
  async find(...args) {
    // Calling the default core controller
    const { results, pagination } = await super.find(...args);

    // some custom logic
    results.forEach((result) => {
      result.counter = 1;
    });

    const result = await fetch("https://viacep.com.br/ws/20761250/json/", {
      method: "GET",
    });

    results[0].address = await result.json();

    return { results, pagination };
  },
}));
