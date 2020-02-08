function setup() {
  createCanvas(500, 500);
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

//letterF
function printF(x, y) {
  line(x, y, x + 50, y);
  line(x, y, x, y + 80);
  line(x, y + 40, x + 50, y + 40);

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
  line(x,y,x+25,y+80);
  line(x+25,y+80,x+50,y);
}

//letterN
function printN(x, y) {
  line(x, y, x, y + 80);
  line(x + 50, y, x + 50, y + 80);
  line(x,y,x+50,y+80);
}

//letterO
function printO(x, y) {
  noFill();
  rect(x, y, 50, 80, 20, 20, 20, 20);
}

//letterQ
function printQ(x, y) {
  noFill();
  line(x+30,+y+55,x+50,y+80);
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
  line(x+50,y+80,x+50,y+40);
  line(x,y,x,y+40);
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
  line(x,y,x+25,y+80);
  line(x+25,y+80,x+50,y);
}

//letterW
function printW(x, y) {
  line(x + 50, y, x + 50, y + 80);
  line(x,y,x,y+80);
  line(x,y+80,x+25,y);
  line(x+25,y,x+50,y+80);
}

//letterX
function printX(x,y) {
  line(x,y,x+50,y+80);
  line(x+50,y,x,y+80);
}

//letterY
function printY(x,y) {
  line(x,y,x+25,y+40);
  line(x+50,y,x+25,y+40);
  line(x+25,y+35,x+25,y+80);
}

//letterZ
function printZ(x, y) {
  line(x, y, x + 50, y);
  line(x, y + 80, x + 50, y + 80);
  line(x+50,y,x,y+80);
}


  function draw() {
  background(102, 224, 255);

  strokeWeight(13);
  printA(20, 10);
  printB(90, 10);
  printC(160, 10);
  printD(230, 10);
  printE(300, 10);
  printG(20, 110);
  printP(230, 210);
  printF(370, 10);
  printH(90, 110);
  printI(160, 110);
  printJ(230, 110);
  printK(300, 110);
  printL(370,110);
  printM(20,210);
  printN(90,210);
  printO(160,210);
  printQ(300,210);
  printR(370,210);
  printS(20,310);
  printT(90,310);
  printU(160,310);
  printV(230,310);
  printW(300,310);
  printX(370,310);
  printY(20,410);
  printZ(90,410);

}
