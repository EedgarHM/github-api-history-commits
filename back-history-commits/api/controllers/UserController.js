/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const { URLS, TOKEN } = sails.config.globals;
module.exports = {
 
  
    getUser : async (req, res) =>{
        const url = URLS.GET_USER;
        const options = {
            method: 'get',
            headers : {
                "accept" : "application/vnd.github.v3+json",
                "Authorization":`Token ${TOKEN}`
            }
        };
        const response = await sails.helpers.axiosRequest(url, options)
        res.ok({response})
    },

    getCommits: async (req, res) => {
        const url = URLS.GET_COMMITS;
        const options = {
            method: 'get',
            headers : {
                "accept" : "application/vnd.github.v3+json",
                "Authorization":`Token ${TOKEN}`
            }
        };
        const response = await sails.helpers.axiosRequest(url,options)
        res.ok({response})
    },

    getRepos: async (req, res) => {
        const url = URLS.GET_REPOS;
        const options = {
            method: 'get',
            headers : {
                "accept" : "application/vnd.github.v3+json",
                "Authorization":`Token ${TOKEN}`
            }
        };
        const response = await sails.helpers.axiosRequest(url,options)
        res.ok({response})
    }
};

