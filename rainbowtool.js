//Creating a new function called eraser
function RainbowTool(){
    
    //Get the image from assets folder and load on the screen
    this.icon = "assets/rainbow.png";
    
    //load a tool icon on the screen
    this.name = "rainbowtool";
    
    this.draw = function(){
        
        var color_1 = random(255); //generate random colour
        var color_2 = random(255);//generate random colour
        var color_3 = random(255);//generate random colour
        
        //the code below will execute when the user pressed the mouse and it will generate random colour to fill in the ellipse.
        if(mouseIsPressed){
            noStroke();
            fill(color_1, color_2, color_3); //fill the ellipse with the random colors 
            ellipse(mouseX, mouseY, 35, 35);//draw an ellipse on the canvas 
        }
    }
};