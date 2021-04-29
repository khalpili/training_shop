'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

const { sanitizeEntity } = require('strapi-utils');

module.exports = {
  async update(ctx) {
    const { id } = ctx.params;

    let entity = await strapi.query('product').update({ pid: id }, ctx.request.body);

    return sanitizeEntity(entity, { model: strapi.models.product });
  },

  async create(ctx) {
    const data = ctx.request.body;
    const results = await strapi.query('product').find({ pid: data.pid });
    const entity = results && results.length;

    let entry;
    if (!entity) {
      entry = await strapi.query('product').create(data);
    } else {
      entry = await strapi.query('product').update({ pid: data.pid }, { balance: data.balance, price: data.price });
    }
    return sanitizeEntity(entry, { model: strapi.models.product });
  }

};
