//start of brush tool

//Creating a new function called brush Tool
function BrushTool(){
    
    //load a tool icon on the screen
    this.name = "brushtool";
    
    //Get the image from assets folder and load on the screen
    this.icon = "assets/brush.jpg";
    
    //number of points to be drawed
    this.points = 1500;
    this.spread = 7;
        
    this.draw = function(){
        //if the mouse is pressed paint on the canvas
        if(mouseIsPressed){
            for(var i = 0; i < this.points; i++){
                point(random(mouseX-this.spread, mouseX + this.spread), 
                    random(mouseY-this.spread, mouseY+this.spread));
            }
        }
    }
};

//end of brush tool