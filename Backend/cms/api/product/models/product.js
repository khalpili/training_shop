'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */
const { sanitizeEntity } = require('strapi-utils');
const axios = require('axios');
const URL = 'http://localhost:3000/ws-out' || process.env.TRANSPORT_URL;

module.exports = {
    lifecycles: {
        afterUpdate: async (entry) => {
            await axios({
                url: URL,
                method: 'POST',
                data: {
                    type: 'product-update',
                    payload: sanitizeEntity(entry, { model: strapi.models.product }),
                },
            })
        },
    }
};

