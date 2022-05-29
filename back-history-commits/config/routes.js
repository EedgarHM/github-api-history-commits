/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

    'GET /api/getUserInfo':{
        controller : 'UserController',
        action : 'getUser',
        cors: {
            allowOrigins: '*',
          }
    },

    'GET /api/getCommits':{
        controller : 'UserController',
        action : 'getCommits',
        cors: {
            allowOrigins: '*',
          }
    },
    'GET /api/getRepos':{
        controller : 'UserController',
        action : 'getRepos',
        cors: {
            allowOrigins: '*',
          }
    }


};
