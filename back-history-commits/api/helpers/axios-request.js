/**
 * Function to execute querys by axios, needs two params url and option
 * @url its the link to send request
 * @options object that can be pass to axios where exists types like headers
 */
const axios = require('axios');


module.exports = {

  friendlyName: 'Axios request',
  description: '',
  inputs: {
    url : {
      type: 'string',
      required: true
    },
    options: {
      type:'json'
    }
  },


  exits: {

    success: {
      description: 'All done.',
    },

  },


  fn: async function ({url,options}, exits) {
    try {
      const response = await axios(url,options)
      return exits.success(response.data)
    } catch (error) {
      sails.log.info('### RESPONSE ERROR',error)
      return exits.success(error.toString())
    }
  }


};

