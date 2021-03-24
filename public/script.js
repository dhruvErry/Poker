var socit = io({ transports: ["websocket"], upgrade: false });
var cards,
  table,
  num,
  index,
  players,
  card, roond, cownt, tOne, tTwo, tThree, tFive, tFour, hOne, hTwo = 0;
  var count=-1 
  cownt=-5
  card=0;
var first, me, flip=false;
flip=true
socit.on("pl", (pla) => {
  players = pla;
});
socit.on("caadz", (card) => {
  // console.log(card)
  cards = card;
});
socit.on("taybil", (tab) => {
  table = tab; 
  hOne = document.getElementById("hOne");
  hTwo = document.getElementById("hTwo");
  tOne = document.getElementById("tOne");
  tTwo = document.getElementById("tTwo");
  tThree = document.getElementById("tThree");
  tFour = document.getElementById("tFour");
  tFive = document.getElementById("tFive");
  // console.log(table)
  if(me) round()
  else roundP()
});
socit.on("naym", (nam) => {
  if(nam===0)
    me=true
    if(!me){
  document.getElementById('open').innerHTML='TABLE'
  document.getElementById('next').innerHTML='YOUR HAND'
  document.getElementById('next').style.marginLeft='44.7%'
  document.getElementById('open').style.marginLeft='47.5%'
    }
  num = nam-players-players;
});
socit.on('necst', (p)=>{
  console.log('riseevd')
  if(!me){
  hand()
  necstP();
  }
})
socit.on('round', (p)=>{

  if(!me){
    flip=true
  roundP()
  }
})


function hand() {
    var cad = ''
    var caad = ''
    var j = 0;
    var sub = 4;
    var soot = ["C", "D", "H", "S"];
    var tar = cards[num];
    var temp=(-num-players)
    var targ = cards[-temp];
    if (tar < 4) cad = cad + "2" + soot[tar];
    else if (tar < 8) cad = cad + "3" + soot[tar - 4];
    else if (tar < 12) cad = cad + "4" + soot[tar - 8];
    else if (tar < 16) cad = cad + "5" + soot[tar - 12];
    else if (tar < 20) cad = cad + "6" + soot[tar - 16];
    else if (tar < 24) cad = cad + "7" + soot[tar - 20];
    else if (tar < 28) cad = cad + "8" + soot[tar - 24];
    else if (tar < 32) cad = cad + "9" + soot[tar - 28];
    else if (tar < 36) cad = cad + "10" + soot[tar - 32];
    else if (tar < 40) cad = cad + "J" + soot[tar - 36];
    else if (tar < 44) cad = cad + "Q" + soot[tar - 40];
    else if (tar < 48) cad = cad + "K" + soot[tar - 44];
    else cad = cad + "A" + soot[tar - 48];
  
    if (targ < 4) caad = caad + "2" + soot[targ];
    else if (targ < 8) caad = caad + "3" + soot[targ - 4];
    else if (targ < 12) caad = caad + "4" + soot[targ - 8];
    else if (targ < 16) caad = caad + "5" + soot[targ - 12];
    else if (targ < 20) caad = caad + "6" + soot[targ - 16];
    else if (targ < 24) caad = caad + "7" + soot[targ - 20];
    else if (targ < 28) caad = caad + "8" + soot[targ - 24];
    else if (targ < 32) caad = caad + "9" + soot[targ - 28];
    else if (targ < 36) caad = caad + "10" + soot[targ - 32];
    else if (targ < 40) caad = caad + "J" + soot[targ - 36];
    else if (targ < 44) caad = caad + "Q" + soot[targ - 40];
    else if (targ < 48) caad = caad + "K" + soot[targ - 44];
    else caad = caad + "A" + soot[targ - 48];
    index=prop.indexOf(cad)
    if(flip)
      toFlip(hOne, index)
    index=prop.indexOf(caad)
    if(flip)
      toFlip(hTwo, index)
    flip=false
  }
  
function necstP(){
  console.log('np')
    var caad="";
    card++;
    var soot=["C", "D", "H", "S"];
    console.log(count)
    var tar=table[count];
    if(tar<4)
      caad=caad+"2"+soot[tar];
    else if(tar<8)
      caad=caad+"3"+soot[tar-4];
    else if(tar<12)
      caad=caad+"4"+soot[tar-8];
    else if(tar<16)
      caad=caad+"5"+soot[tar-12];
    else if(tar<20)
      caad=caad+"6"+soot[tar-16];
    else if(tar<24)
      caad=caad+"7"+soot[tar-20];
    else if(tar<28)
      caad=caad+"8"+soot[tar-24];
    else if(tar<32)
      caad=caad+"9"+soot[tar-28];
    else if(tar<36)
      caad=caad+"10"+soot[tar-32];
    else if(tar<40)
      caad=caad+"J"+soot[tar-36];
    else if(tar<44)
      caad=caad+"Q"+soot[tar-40];
    else if(tar<48)
      caad=caad+"K"+soot[tar-44];
    else if(tar<52)
      caad=caad+"A"+soot[tar-48];
      index=prop.indexOf(caad)
    
      count++
    if(card===1){
  toFlip(tOne, index)
  necstP();
}
else if(card===2){
  toFlip(tTwo, index)
  necstP();
}
else if(card===3){
  toFlip(tThree, index)
}
else if(card===4){
  toFlip(tFour, index)
}
else if(card===5){
  toFlip(tFive, index)
}
  }


function clict(){
  socit.emit('necst', 'yo')
  hand()
  necst()
}

function necst(){
var caad="";
card++;
var soot=["C", "D", "H", "S"];
var tar=table[count];
if(tar<4)
  caad=caad+"2"+soot[tar];
else if(tar<8)
  caad=caad+"3"+soot[tar-4];
else if(tar<12)
  caad=caad+"4"+soot[tar-8];
else if(tar<16)
  caad=caad+"5"+soot[tar-12];
else if(tar<20)
  caad=caad+"6"+soot[tar-16];
else if(tar<24)
  caad=caad+"7"+soot[tar-20];
else if(tar<28)
  caad=caad+"8"+soot[tar-24];
else if(tar<32)
  caad=caad+"9"+soot[tar-28];
else if(tar<36)
  caad=caad+"10"+soot[tar-32];
else if(tar<40)
  caad=caad+"J"+soot[tar-36];
else if(tar<44)
  caad=caad+"Q"+soot[tar-40];
else if(tar<48)
  caad=caad+"K"+soot[tar-44];
else if(tar<52)
  caad=caad+"A"+soot[tar-48];
  index=prop.indexOf(caad)

  count++
if(card===1){
  toFlip(tOne, index)
  necst();
}
else if(card===2){
  toFlip(tTwo, index)
  necst();
}
else if(card===3){
  toFlip(tThree, index)
}
else if(card===4){
  toFlip(tFour, index)
}
else if(card===5){
  toFlip(tFive, index)
}
}

function round(){
  roond++
  socit.emit('round', 'a')
  num=-(-num-players-players)
cownt+=5;
first=true;
count=cownt;
card=0;
toFlip(tOne, 52)
toFlip(tTwo, 53)
toFlip(tThree, 54)
toFlip(tFour, 55)
toFlip(tFive, 56)
toFlip(hOne, 56)
toFlip(hTwo, 52)
flip=true
}
function roundP(){
roond++
num=-(-num-players-players)
cownt+=5;
first=true;
count=cownt;
card=0;
toFlip(tOne, 52)
toFlip(tTwo, 53)
toFlip(tThree, 54)
toFlip(tFour, 55)
toFlip(tFive, 56)
toFlip(hOne, 56)
toFlip(hTwo, 52)
}

var prop=['2C', '2D', '2H', '2S','3C', '3D', '3H', '3S','4C', '4D', '4H', '4S','5C', '5D', '5H', '5S','6C', '6D', '6H', '6S','7C', '7D', '7H', '7S','8C', '8D', '8H', '8S','9C', '9D', '9H', '9S','10C', '10D', '10H', '10S','JC', 'JD', 'JH', 'JS','QC', 'QD', 'QH', 'QS','KC', 'KD', 'KH', 'KS','AC', 'AD', 'AH', 'AS',]
var lingc=['https://i.postimg.cc/NMjbG91T/2C.png', 'https://i.postimg.cc/5yH3vhK2/2D.png', 'https://i.postimg.cc/vHVhmd6P/2H.png', 'https://i.postimg.cc/zDMp5f3b/2S.png', 'https://i.postimg.cc/Njv49P6Q/3C.png', 'https://i.postimg.cc/zfJFpb2M/3D.png', 'https://i.postimg.cc/3RNCQMTF/3H.png', 'https://i.postimg.cc/Z5PLrFHp/3S.png', 'https://i.postimg.cc/k5fFHJk5/4C.png', 'https://i.postimg.cc/DZNQ2Cfk/4D.png', 'https://i.postimg.cc/nrQ4MvMs/4H.png', 'https://i.postimg.cc/LhKzPnZx/4S.png', 'https://i.postimg.cc/CMZXbXq8/5C.png', 'https://i.postimg.cc/v8pjhhrN/5D.png', 'https://i.postimg.cc/rFxHP4gF/5H.png', 'https://i.postimg.cc/4xG0k3Fv/5S.png', 'https://i.postimg.cc/XYgzV0TR/6C.png', 'https://i.postimg.cc/GphSt5RH/6D.png', 'https://i.postimg.cc/k4LjjMbb/6H.png', 'https://i.postimg.cc/qRNbX6zr/6S.png', 'https://i.postimg.cc/fTn2mLZ4/7C.png', 'https://i.postimg.cc/2yv0gpQX/7D.png', 'https://i.postimg.cc/sfZHMWk9/7H.png', 'https://i.postimg.cc/PrW64jrC/7S.png', 'https://i.postimg.cc/Vk4DxWt1/8C.png', 'https://i.postimg.cc/Z5JwsMCV/8D.png', 'https://i.postimg.cc/cJbTH1Tb/8H.png', 'https://i.postimg.cc/cJHX0t73/8S.png', 'https://i.postimg.cc/fLSC04rT/9C.png', 'https://i.postimg.cc/jqNvxbfM/9D.png', 'https://i.postimg.cc/jdbcCFQt/9H.png', 'https://i.postimg.cc/gjvKNVpC/9S.png', 'https://i.postimg.cc/WzRnG9Bm/10C.png', 'https://i.postimg.cc/c4Bm3BXY/10D.png', 'https://i.postimg.cc/XYNgkBzP/10H.png', 'https://i.postimg.cc/tgYtLQyt/10S.png','https://i.postimg.cc/C5NqRmSx/JC.png', 'https://i.postimg.cc/CLh83TsB/JD.png', 'https://i.postimg.cc/pVY8cXzM/JH.png','https://i.postimg.cc/rwbtRdXx/JS.png' ,'https://i.postimg.cc/7hxCr008/QC.png', 'https://i.postimg.cc/c4kvPKJ2/QD.png', 'https://i.postimg.cc/9XpRtgHW/QH.png', 'https://i.postimg.cc/QdBFDX9t/QS.png', 'https://i.postimg.cc/sg1h2Y83/KC.png', 'https://i.postimg.cc/wTwNHfwW/KD.png', 'https://i.postimg.cc/GpyTFcdN/KH.png', 'https://i.postimg.cc/Jn3yFPy5/KS.png','https://i.postimg.cc/W4C6VW1R/AC.png', 'https://i.postimg.cc/ydRh8mDD/AD.png', 'https://i.postimg.cc/C5HjjwHY/AH.png', 'https://i.postimg.cc/90jdRD9J/AS.png', 'https://i.postimg.cc/T1CKd1Jy/red_back.png', 'https://i.postimg.cc/TYfjTWfP/blue-back.png', 'https://i.postimg.cc/g20vZFwF/gray-back.png', 'https://i.postimg.cc/DwY1QjsW/green-back.png', 'https://i.postimg.cc/fLQt56bb/purple_back.png']
console.log('syc'+lingc.length)
function toFlip(wich, indecs){
    wich.style.animation='flip .8s linear'
    setTimeout(function(){ wich.style.animation='' }, 1000);
    setTimeout(function(){ wich.setAttribute("src", lingc[indecs]); 
    }, 344);
}