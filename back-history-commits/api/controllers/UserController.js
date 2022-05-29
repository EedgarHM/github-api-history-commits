/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
module.exports = {
  
    getUser : async (req, res) =>{
        const axiosConfig = ' https://api.github.com/users/eedgarhm';
        const options = {
            method: 'get',
            headers : {
                "accept" : "application/vnd.github.v3+json",
                "Authorization": "Token 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"
            }
        };
        const response = await sails.helpers.axiosRequest(axiosConfig, options)
        res.ok({response})
    },

    getCommits: async (req, res) => {
        const url = 'https://api.github.com/repos/eedgarhm/github-api-history-commits/commits';
        const options = {
            method: 'get',
            headers : {
                "accept" : "application/vnd.github.v3+json",
                "Authorization": "Token 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"
            }
        };
        const response = await sails.helpers.axiosRequest(url,options)
        console.log(response)
        res.ok({response})
    },

    getRepos: async (req, res) => {
        const url = 'https://api.github.com/users/EedgarHM/repos';
        const options = {
            method: 'get',
            headers : {
                "accept" : "application/vnd.github.v3+json",
                "Authorization": "Token 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"
            }
        };
        const response = await sails.helpers.axiosRequest(url,options)
        console.log(response)
        res.ok({response})
    }
};

