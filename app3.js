var express = require('express');
var app = express();


app.all('/', function (req, res) {
    res.send('Hello World!');
});

app.all('/test/', function (req, res) {
    console.log("Test1");
    res.send("Test URL");
});

app.listen(3000, function() {
    console.log("server starting in port 3000");
});

function addMe(x)
{
};