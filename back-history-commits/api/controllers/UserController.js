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

    getCommits: async (req, res) => {
        const url = 'https://api.github.com/repos/eedgarhm/github-api-history-commits/commits';
        const options = {
            method: 'get',
            auth: "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",
            headers : "accept : application/vnd.github.v3+json"
        };
        const response = await sails.helpers.axiosRequest(url,options)
        res.ok({response})
    }
};

