//start of circle tool

//Creating a new function called CircleTool
function CircleTool(){
    
    //Get the image from assets folder and load on the screen
    this.icon = "assets/circle.jpg";
    
    //load a tool icon on the screen
    this.name = "circle";
    
    //global variable with the mouseX and mouseY cordinate
    //set it to -1 to begin with 
    var startMouseX = -1;
    var startMouseY = -1;
    var drawing = false;
    
    //Function to draw an circle
    this.draw = function(){
        
        //condition will execute once the user pressed the mouse
        if(mouseIsPressed){
            
            //The code below will allow user to draw a circle when the mouse pressed and load the pixels
            if(startMouseX == -1) {
                startMouseX = mouseX;
                startMouseY = mouseY;
                drawing = true;
                loadPixels(); // it saves the previous circle
            } 
            else {
                updatePixels();
                ellipse(startMouseX, startMouseY, mouseX - startMouseX, mouseY - startMouseY); 
            }
        }
        
        else if(drawing){
            ellipse(startMouseX, startMouseY, mouseX - startMouseX, mouseY - startMouseY); 
			drawing = false;
			startMouseX = -1;
			startMouseY = -1;
		}
    }
}
//End of circle tool