var express = require("express");



app.get("/", function(req, res){
  fs.readFile("tacos.json", function(error, respuesta){
    var gustos  = JSON.parse(respuesta);
    return res.send(gustos);
  })
})


app.listen(80, function(){
  console.log("server is listening in port 80");
})
