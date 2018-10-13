var express = require('express');
var app = express();
var request = require("request");

app.get('/', function (req, res) {
  res.send('Hello World!');  
});

app.get('/test1/', function (req, res) {

  var newtx = 
  {  
   "inputs":[  
      {  
         "addresses":[  
            "3J1V9juFsQs86CWMSr83kcXdx3q2K7azBQ"
         ]
      }
   ],
   "outputs":[  
      {  
         "addresses":[  
            "16KrjwSq5hoMjLDVwhWTwjwh7WndocE2Rt"
         ],
         "value":5000
      }
   ]
};


request.post({
    "headers": { "content-type": "application/json" },
    "url": "https://api.blockcypher.com/v1/btc/main/txs/new",
    "body": JSON.stringify(newtx)
}, (error, response, body) => {
    if(error) {
        res.send(error);
    }
    //console.dir("success");
    res.send(JSON.parse(body));
});
});


app.listen(3000, function () {

  console.log('Example app listening on port 3000!');
  getTransaction();


}); // app listen ends here 


function getTransaction() {
console.log("function get Transaction");
} 
