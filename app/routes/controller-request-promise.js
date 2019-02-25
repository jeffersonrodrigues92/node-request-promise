var request = require("request");
var requestPromise = require('request-promise');

module.exports = function(app){
    app.get("/request-promise", (req, res) =>{
        requestPromise('https://viacep.com.br/ws/06246010/json/', {json : true})
            .then(function (response) {
                res.send(response);
            })
            .catch(function (err) {
                console.log(err);
        }); 
    });

    app.get("/request-no-promise", (req, res) =>{
        var response = requestNoPromise();
        res.send(response);
    });

    function requestNoPromise(){
        var response = ""
        request.get('https://viacep.com.br/ws/06246010/json/', {json : true}, (err, response, body) => {
           response = body;
        });
        return response;
    }
}