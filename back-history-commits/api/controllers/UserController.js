/**
 * UserController
 *
 * @description :: Returns data from the user
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
        try {
            const response = await sails.helpers.axiosRequest(url,options)
            return res.status(200).ok({response})
            
        } catch (error) {
            console.log('Error Type: ',error)
            return rea.errorServer({error})
        }
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
        try {
            const response = await sails.helpers.axiosRequest(url,options)
            return res.status(200).ok({response})
            
        } catch (error) {
            console.log('Error Type: ',error)
            return rea.errorServer({error})
        }
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
        try {
            const response = await sails.helpers.axiosRequest(url,options)
            return res.status(200).ok({response})
            
        } catch (error) {
            console.log('Error Type: ',error)
            return rea.errorServer({error})
        }
    }
};

