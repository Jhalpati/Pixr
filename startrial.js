//Creating a new function called eraser
function StarTrial(){
    
    //Get the image from assets folder and load on the screen
    this.icon = "assets/star01.jpg";
    
    //load a tool icon on the screen
    this.name = "star";
    
    // Load the image on the canvas when the following code execute
    img = loadImage("assets/star.jpg");
    
    this.draw = function(){
        if(mouseIsPressed){ //star the drawing when the mouse is pressed 
            image(img, mouseX, mouseY, 40, 40);// display the image when the mouse is pressed
            loadPixels();
        }
        else{
            //this code will center the images if I did not add this code then the image will not display at the center.
            imageMode(CENTER);
            updatePixels();
            image(img, mouseX, mouseY, 40, 40);// display the image when the mouse is pressed
        }
    }
};