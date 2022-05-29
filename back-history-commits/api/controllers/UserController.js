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
            headers : {
                "accept" : "application/vnd.github.v3+json",
                "Authorization": "Token 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 "
            }
        };
        const response = await sails.helpers.axiosRequest(url,options)
        console.log(response)
        res.ok({response})
    }
};

