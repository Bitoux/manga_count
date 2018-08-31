var request = require('request');

const apiEndPoint = 'https://mcd.iosphe.re/api/v1/';

module.exports = {
  authenticate: function(){

    request.post({
      url: apiEndPoint + 'auth/access_token',
      form: {
        grant_type: 'client_credentials',
        client_id: '1036',
        client_secret: 'T44gqUBM3yPfoTIAR2m0YCirvMdhyyQKaDmPXssN'
      }
    }, (err, res, body) => {
      console.log(res, body);
    });
  },
  getMangas: function(){
    request.get({
      url: apiEndPoint + 'database/'
    }, (err, ress, body) => {
      console.log(err, body);
    });
  }
}