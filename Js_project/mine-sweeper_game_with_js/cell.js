function cell(i, j, w){
    this.i = i;
    this.j = j;
    this.x = i * w;
    this.y = j * w;
    this.w = w;
    this.beeCounter;
    
    // this.bee = true;
    if(random(1) < 0.5){
        this.bee = false;
    }else {
        this.bee = false;
    }
    this.revealed = false;
  }

cell.prototype.show = function(){
    stroke(0);
    noFill();
    rect(this.x, this.y, this.w, this.w);
    if(this.revealed){
        if(this.bee){
            fill(255, 102, 179);
            // ellipseMode(CORNER);
            ellipse(this.x + this.w/2,  this.y + this.w/2, this.w * 0.5);
        }else{
            fill(255, 102, 179);
            rect(this.x, this.y, this.w, this.w);
            textAlign(CENTER);
            fill(0);
            if(this.beeCounter > 0){
                text(this.beeCounter, this.x + w/2, this.y + w/2 + 4);
            }
            
        }    
    }
}

cell.prototype.contains = function(x, y){
    return (x > this.x && x < this.x + this.w && y > this.y && y < this.y + this.w);
}

cell.prototype.reveal = function(){
    this.revealed = true;
    if(this.beeCounter == 0){
        this.floodfill();
    } 
}



cell.prototype.countBees = function (){
    if(this.bee){
        this.beeCounter = "Brave";
        return;
    }
    var total = 0;
    for (var xoff = -1; xoff <= 1; xoff++){
        for(var yoff = -1; yoff <= 1; yoff++){
            i = this.i + xoff;
            j = this.j + yoff;
            if(i > -1 && i < cols && j > -1 && j < rows){
                var nieghbor = grid[i][j];
                if (nieghbor.bee){
                    total++;
            }
            }
            
        }
    }
    this.beeCounter = total;
}

cell.prototype.floodfill = function(){
    for(var xoff = -1; xoff <= 1; xoff++){
        for(var yoff = -1; yoff <= 1; yoff++){
            i = this.i + xoff;
            j = this.j + yoff;
            if(i > -1 && i < cols && j > -1 && j < rows){
                var nieghbor = grid[i][j];
                if(!nieghbor.bee && !nieghbor.revealed){
                    nieghbor.reveal();
                }
                
            }
        }
    }
}



function draw(){
    background(255);
    for(var i = 0; i < cols; i++){
        for(var j = 0; j < rows; j++){
            grid[i][j].show();
        }
    }
}


