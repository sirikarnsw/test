function setup() {
  createCanvas(windowWidth, windowHeight/2);
  colors = [
    color(179, 152, 144), // Dusty Rose
    color(192, 179, 141), // Faded Mustard
    color(135, 148, 136), // Sage Green
    color(188, 171, 152), // Antique White
    color(112, 108, 92),  // Olive Drab
    color(170, 129, 110)  // Worn Terracotta
  ]
  background(0)
  rectMode(CENTER)
}

function drawExplosion(x, y, diameter) {
  let randomColor = random(colors)
  fill(randomColor)
  noStroke()
  circle(x, y, diameter)
}

function mousePressed() {
  drawFireworks()
}

function drawFireworks() {
  drawFire1()
  drawFire2()
}

function drawFire1() {
  let d = int(random(10,20))
  drawExplosion(mouseX, mouseY, d)

  // Circles arranged in circular patterns
  for (let i = 0; i < 12; i++) {
    let angle = (i / 12) * TWO_PI
    let x = mouseX + 50 * cos(angle)
    let y = mouseY + 50 * sin(angle)
    drawExplosion(x, y, d)
  }

  let randomColor = random(colors)
  fill(randomColor)
  noStroke();
  let rand = int(random(1, 4))

  if (rand == 1) {
    drawExplosion(mouseX, mouseY, d)
  } 
  else if (rand == 2) {
    drawExplosion(mouseX, mouseY, d)
  } 
  else if (rand == 3) {
    drawExplosion(mouseX, mouseY, d)
  }
}

function drawFire2() {
  let d2 = int(random(5,30))
  drawExplosion(mouseX, mouseY, d2)

  // Circles arranged in circular patterns
  for (let i = 0; i < 10; i++) {
    let angle = (i /10) * TWO_PI
    let x = mouseX + 100 * cos(angle)
    let y = mouseY + 100 * sin(angle)
    drawExplosion(x, y, d2);
  }

  let randomColor = random(colors)
  fill(randomColor)
  noStroke()
  let rand = int(random(1, 4))

  if (rand == 1) {
    drawExplosion(mouseX, mouseY, d2)
  } 
  else if (rand == 2) {
    drawExplosion(mouseX, mouseY, d2)
  } 
  else if (rand == 3) {
    drawExplosion(mouseX, mouseY, d2)
  }
}