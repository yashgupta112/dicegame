var rNo1 = Math.floor(Math.random() * 6) + 1;

var rImage1 = "dice" + rNo1 + ".png";
document.querySelector(".img1").setAttribute("src",rImage1);
var rNo2 = Math.floor(Math.random()*6)+1;
var rImage2 = "dice" + rNo2 + ".png";
document.querySelector(".img2").setAttribute("src",rImage2);
if (rNo1>rNo2) {
  document.querySelector("h1").innerHTML = "🚩 PLayer 1 wins";
}
else if (rNo1<rNo2) {
  document.querySelector("h1").innerHTML = "Player 2 wins 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw";
}
