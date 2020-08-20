//start of right triangle tool

//Creating a new function called Triangle Tool
function TriangleTool(){
    
    //Get the image from assets folder and load on the screen
    this.icon = "assets/righttriangle.png";
    
    //load a tool icon on the screen
    this.name = "triangle";
    
    //global variable with the mouseX and mouseY cordinate
    //set it to -1 to begin with 
    var startMouseX = -1;
    var startMouseY = -1;
    var drawing = false;
    
    //Function to draw an circle
    this.draw = function(){
        
        //condition will execute once the user pressed the mouse
        if(mouseIsPressed){
            
            //The code below will allow user to draw a triangle when the mouse pressed and load the pixels
            if(startMouseX == -1) {
                startMouseX = mouseX;
                startMouseY = mouseY;
                drawing = true;
                loadPixels(); // it saves the previous triangle
            } 
            else {
                updatePixels();
                triangle(startMouseX, startMouseY, startMouseX, mouseY, mouseX, mouseY); 
            }
        }
        
        else if(drawing){
			triangle(startMouseX, startMouseY, startMouseX, mouseY, mouseX, mouseY);
			drawing = false;
			startMouseX = -1;
			startMouseY = -1;
		}
    }
    
    
}
//End of right triangle tool