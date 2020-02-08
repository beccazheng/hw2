function setup() {
  createCanvas(700, 500);
}

//letter A
function printA(x, y) {
  line(x, y + 80, x + 25, y);
  line(x + 25, y, x + 50, y + 80);
  line(x + 13, y + 50, x + 38, y + 50);
}

//letterB
function printB(x, y) {
  line(x, y, x + 50, y);
  line(x, y, x, y + 80);
  line(x + 50, y, x + 50, y + 80);
  line(x, y + 80, x + 50, y + 80);
  line(x, y + 40, x + 50, y + 40);
}

//letterC
function printC(x, y) {
  line(x, y, x + 50, y);
  line(x, y, x, y + 80);
  line(x, y + 80, x + 50, y + 80);
}

//letterD
function printD(x, y) {
  noFill();
  rect(x, y, 50, 80, 0, 20, 20, 0);
}

//letterE
function printE(x, y) {
  line(x, y, x + 50, y);
  line(x, y, x, y + 80);
  line(x, y + 80, x + 50, y + 80);
  line(x, y + 40, x + 50, y + 40);
}

//letterF
function printF(x, y) {
  line(x, y, x + 50, y);
  line(x, y, x, y + 80);
  line(x, y + 40, x + 50, y + 40);

}



//letterG
function printG(x, y) {
  line(x, y, x + 50, y);
  line(x, y, x, y + 80);
  line(x, y + 80, x + 50, y + 80);
  line(x + 25, y + 40, x + 50, y + 40);
  line(x + 50, y + 80, x + 50, y + 40);
}

//letterP
function printP(x, y) {
  noFill();
  rect(x, y, 50, 40, 0, 20, 20, 0);
  line(x, y + 80, x, y + 40);
}



//letterH
function printH(x, y) {
  line(x, y, x, y + 80);
  line(x + 50, y, x + 50, y + 80);
  line(x, y + 40, x + 50, y + 40);
}

//letterI
function printI(x, y) {
  line(x, y, x + 50, y)
  line(x + 25, y, x + 25, y + 80);
  line(x, y + 80, x + 50, y + 80);
}

//letterJ
function printJ(x, y) {
  line(x, y, x + 50, y)
  line(x + 25, y, x + 25, y + 80);
  line(x + 25, y + 80, x + 5, y + 80);
}

//letterK
function printK(x, y) {
  line(x, y, x, y + 80);
  line(x, y + 45, x + 37, y);
  line(x, y + 35, x + 40, y + 80);
}

//letterL
function printL(x, y) {
  line(x, y, x, y + 80);
  line(x, y + 80, x + 50, y + 80);
}

//letterM
function printM(x, y) {
  line(x, y, x, y + 80);
  line(x + 50, y, x + 50, y + 80);
  line(x, y, x + 25, y + 80);
  line(x + 25, y + 80, x + 50, y);
}

//letterN
function printN(x, y) {
  line(x, y, x, y + 80);
  line(x + 50, y, x + 50, y + 80);
  line(x, y, x + 50, y + 80);
}

//letterO
function printO(x, y) {
  noFill();
  rect(x, y, 50, 80, 20, 20, 20, 20);
}

//letterQ
function printQ(x, y) {
  noFill();
  line(x + 30, +y + 55, x + 50, y + 80);
  rect(x, y, 50, 80, 20, 20, 0, 20);
}

//letterR
function printR(x, y) {
  line(x, y, x + 50, y);
  line(x, y, x, y + 80);
  line(x + 50, y, x + 50, y + 80);
  line(x, y + 40, x + 50, y + 40);
}

//letterS
function printS(x, y) {
  line(x, y, x + 50, y);
  line(x, y + 80, x + 50, y + 80);
  line(x, y + 40, x + 50, y + 40);
  line(x + 50, y + 80, x + 50, y + 40);
  line(x, y, x, y + 40);
}

//letterT
function printT(x, y) {
  line(x, y, x + 50, y)
  line(x + 25, y, x + 25, y + 80);
}

//letterU
function printU(x, y) {
  line(x, y, x, y + 80);
  line(x + 50, y, x + 50, y + 80);
  line(x, y + 80, x + 50, y + 80);
}

//letterV
function printV(x, y) {
  line(x, y, x + 25, y + 80);
  line(x + 25, y + 80, x + 50, y);
}

//letterW
function printW(x, y) {
  line(x + 50, y, x + 50, y + 80);
  line(x, y, x, y + 80);
  line(x, y + 80, x + 25, y);
  line(x + 25, y, x + 50, y + 80);
}

//letterX
function printX(x, y) {
  line(x, y, x + 50, y + 80);
  line(x + 50, y, x, y + 80);
}

//letterY
function printY(x, y) {
  line(x, y, x + 25, y + 40);
  line(x + 50, y, x + 25, y + 40);
  line(x + 25, y + 35, x + 25, y + 80);
}

//letterZ
function printZ(x, y) {
  line(x, y, x + 50, y);
  line(x, y + 80, x + 50, y + 80);
  line(x + 50, y, x, y + 80);
}


function draw() {
  background(220, 300, 90);

  strokeWeight(13);
  printA(160, 10);
  printA(370, 10);
  printA(510, 110);
  printA(230, 210);
  printA(90, 310);



  printC(20, 10);
  printD(510, 10);
  printD(370, 210);

  printE(580, 10);
  printE(90, 210);

  printG(20, 210);
  printH(90, 10);
  printI(160, 110);
  printM(300, 10);
  printM(510, 210);

  printN(440, 10);
  printN(580, 110);
  printN(300, 210);


  printO(370, 110);
  printR(230, 10);
  printR(20, 110);
  printR(440, 110);
  printS(230, 110);
  printY(580,210);
  printF(20, 310);
  printV(160,310);
  printP(260, 310);
  printO(330, 310);
  printK(400, 310);
  printE(460, 310);
  printM(530, 310);
  printO(600, 310);
  printN(20, 410);
  printH(180, 410);
  printE(250, 410);
  printH(320, 410);
  printE(390, 410);


}
