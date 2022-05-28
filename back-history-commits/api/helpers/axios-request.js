const axios = require('axios');
module.exports = {


  friendlyName: 'Axios request',


  description: '',


  inputs: {
    axiosConfig : {
      type: 'json',
      required: true
    }
  },


  exits: {

    success: {
      description: 'All done.',
    },

  },


  fn: async function ({axiosConfig}, exits) {
    // TODO
    try {
      const response = await axios(axiosConfig)
      return exits.success(response.data)
    } catch (error) {
      sails.log.info('***********************')
      return exits.success(error.toString())
    }
  }


};

