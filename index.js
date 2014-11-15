var express = require('express')
var app = express();
var pg = require('pg');


app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))


app.get('/', function(req, res) {

  res.json({"id":1,"name":"If we had to implment cuts, would you prefer to cut either refuse collection or street lighting","options":{"1":"Refuse Collection","2":"Street Lighting"}});

})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
