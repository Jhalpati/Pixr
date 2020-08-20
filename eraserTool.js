//Creating a new function called eraser
function EraserTool(){
    
    //Get the image from assets folder and load on the screen
    this.icon = "assets/eraser.png";
    
    //load a tool icon on the screen
    this.name = "eraser";
    
    //Function to erase something from the canvas
    this.draw = function(){
        
        //condition will execute once the user pressed the mouse
        if(mouseIsPressed){
            noStroke();
            fill(255); // fill the color with white
            ellipse(mouseX, mouseY, 30, 30);//size and shape of the eraser
            loadPixels(); //load the white pixels
        }
        else {
            updatePixels();//update the white pixels
            noStroke();
            fill(255);// fill the color with white
            ellipse(mouseX, mouseY, 30, 30);//size and shape of the eraser
        }
    }
};