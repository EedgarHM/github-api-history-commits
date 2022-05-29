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
    // TODO
    console.log(options)
    try {
      const response = await axios(url,{options})
      return exits.success(response.data)
    } catch (error) {
      sails.log.info('***********************',error)
      return exits.success(error.toString())
    }
  }


};

