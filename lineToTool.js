//Create a new function called LineToTool
function LineToTool(){
    
    // Get the icon image from assets folder and load on the screen.
	this.icon = "assets/lineTo.jpg"; 
    
    // load a tool icon on the screen
	this.name = "LineTo"; 
    
    //global variable with the mouseX and mouseY cordinate
    //set it to -1 to begin with 
	var startMouseX = -1;
	var startMouseY = -1;
	var drawing = false;
    
    // code below is a loop function where if the mouse is pressed it will loadPixels else updatePixels and also drawing the line multiple times. 
	this.draw = function(){

        //condition will execute once the user pressed the mouse
		if(mouseIsPressed){
            
            //The code below will allow user to draw a straight line when the mouse pressed and load the pixels
			if(startMouseX == -1){
				startMouseX = mouseX;
				startMouseY = mouseY;
				drawing = true;
				loadPixels();
			}
            
            //it will allow user to see where the line is going
			else{
				updatePixels();
				line(startMouseX, startMouseY, mouseX, mouseY);
			}

		}
        
        //this code will allow user to create a multiple lines.
		else if(drawing){
			line(startMouseX, startMouseY, mouseX, mouseY);
			drawing = false;
			startMouseX = -1;
			startMouseY = -1;
		}
	};


}