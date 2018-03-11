

function make2Darr(cols, rows){
  var arr = new Array(cols);
  for(var i = 0; i < arr.length; i++){
    arr[i] = new Array(rows);
  }
  return arr;
}

var grid;
var cols;
var rows;
var w = 40;
var totalBees = 20;

function setup() {
  createCanvas(401, 401);
  cols = floor(width/w);
  rows = floor(height/w);
  grid = make2Darr(cols, rows);
  for(var i = 0; i < cols; i++){
    for(var j = 0; j < rows; j++){
      grid[i][j] = new cell(i, j, w);
    }
  }

  var option = [];
  for(i = 0; i < cols; i++){
    for( j = 0; j < rows; j++){
      option.push([i, j]);
    }
  }

  for (n = 0; n < totalBees; n++){
    var index = floor(random(option.length));
    var i = option[index][0];
    var j = option[index][1];
    option.splice(index, 1);
    grid[i][j].bee = true;
  }

  for(var i = 0; i < cols;i++){
    for(var j = 0; j < rows; j++){
      grid[i][j].countBees();
    }
  }
}

function draw() {
  background(0);
  for(var i = 0; i < cols; i++){
    for(var j = 0; j < rows; j++){
      grid[i][j].show(); 
    }
  }
}



function gameOver(){
  for(var i = 0; i < cols; i++){
      for(var j = 0; j < rows; j++){
          grid[i][j].revealed = true;
          document.getElementById("gameOver").innerHTML = "GAME OVER";
      }
  }
}

function mousePressed(){
  for(var i = 0; i < cols; i++){
    for(var j = 0; j < rows; j++){
      if(grid[i][j].contains(mouseX, mouseY)){
        grid[i][j].reveal();
        if(grid[i][j].bee){
          gameOver();
        }
      }
    }
  }
}