var http = require("http");
var engines = require("consolidate");
var BP = require("body-parser");
var express = require("express");
var app = express();
var num, count = 1;
var yoozd = []; 
var cards = []; 
var table= [];
var players, me=false;
app.use(BP.urlencoded({ extended: true }));

app.engine("html", engines.mustache);
app.use(express.static("public"));

var server = http.createServer(app);
server.listen(8081, process.env.PORT, function () {
  console.log("Server Is Up");
});

app.post("/cards", function (req, res) {
  num = req.body.no;
  if(!isNaN(num)){
    players=num
    count=0
    me=true;
    console.log('delt')
    deel();
  }
  else
    me=false
  res.render("cards.html");
});

app.get("/", function (req, res) {
  res.render("home.html");
});

function deel() {
  cards=[]
  table=[]
  var n = 0;
  var ran = 0;
  while (n < 100) {
    yoozd = [];
    var b = 0;
    while (b < 2) {
      var c = 0;
      while (c < num) {
        ran = parseInt(Math.random()* 52);
        while (yoozd.includes(ran)) ran = parseInt(Math.random() * 52);
        yoozd.push(ran);
        cards.push(ran);
        c++;
      }
      b++;
    } 
    b = 0;
    while (b < 8) {
      ran = parseInt(Math.random() * 52);
      while (yoozd.includes(ran)) ran = parseInt(Math.random() * 52);
      yoozd.push(ran);
      if (b !== 0 && b !== 2 && b !== 4) table.push(ran);
      b++;
    }
    n++;
  }
}

var io = require("socket.io").listen(server);

io.on("connection", (socket) => {
  console.log(socket.id);
  console.log(players)
  socket.emit('pl', players)
  if(me)
    socket.emit('naym', 0)
  else
    socket.emit('naym', count)  
  count++
  socket.emit("caadz", cards);
  socket.emit("taybil", table);
  socket.on('round', (p)=>{
      socket.broadcast.emit('round', p)
  })
  socket.on('necst', (p)=>{
      io.emit('necst', p)
  })
  // socket.on("newPlayer", (naym) => {
  //   // console.log(naym + " joind " + room);
  // });
  // socket.on("ges", (data) => {
  //   // io.in(room).emit('ges', ges)
  //   socket.broadcast.to(data.rom).emit("ges", data.guess);
  // });
  // socket.on("sub", (data) => {
  //   socket.broadcast.to(data.rom).emit("sub", data.gesser);
  // });
  // socket.on("disconnect", (p) => {
  //   roomz[idRoom[socket.id]] = roomz[idRoom[socket.id]] - 1;
  //   console.log(roomz);
  //   if (isEmpty(io.sockets.adapter.rooms)) roomz = [];
});
