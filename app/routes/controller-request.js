const request = require("request");

module.exports = function(app){
    app.get("/", async(req, res) => {
        var nasa = getNasa();
        var cep =  await getCEP();

        var json = {
            nasa : nasa,
            cep : cep
        };

        res.send(json);
    });

    //Asynchronous
    function getNasa(){
            var response = "";
            request.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', {json : true}, (err, res, body) => {
                response = body;
        });
        
        return response;
    }

    //Synchronous
    function getCEP(){
        return new Promise((resolve, reject) => {
            request.get('https://viacep.com.br/ws/06246010/json/', {json : true}, (err, res, body) => {
             resolve(body);
            });
        });
    }
}