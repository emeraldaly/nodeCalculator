var express = require('express');

var app = express();
var PORT = process.env.PORT || 8090;

app.get('/addition/:a/:b', function(req, res){
  res.send(JSON.stringify(parseInt(req.params.a) + parseInt(req.params.b)));
})
app.get('/multiply/:a/:b', function(req, res){
  res.send(JSON.stringify(parseInt(req.params.a) * parseInt(req.params.b)));
})
app.get('/subtract/:a/:b', function(req, res){
  res.send(JSON.stringify(parseInt(req.params.a) - parseInt(req.params.b)));
})
app.get('/divide/:a/:b', function(req, res){
  res.send(JSON.stringify(parseInt(req.params.a) / parseInt(req.params.b)));
});



app.listen(PORT, function() {
  console.log("listening on port %s", PORT);
});
