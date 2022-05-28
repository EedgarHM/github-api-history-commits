/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
module.exports = {
  
    getUser : async (req, res) =>{
        const axiosConfig = ' https://api.github.com/users/eedgarhm';
        const response = await sails.helpers.axiosRequest(axiosConfig)
        res.ok({response})
    },

    async getCommits(req, res){

    }
};

