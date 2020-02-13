let canvas = document.getElementById("main-canvas")
let context = canvas.getContext("2d");
//draw image in canvas
let img = new Image();
img.src = 'image.png';
img.onload = function(){
  context.drawImage(img,0,0,img.width, img.height);
};


document.querySelector("#main-canvas").addEventListener("click", e =>{
  document.body.style.color = "white"
    let pageGap = $(canvas).offset();//get value of extra gap between window and image
    let canvasX = Math.floor(e.pageX - pageGap.left);//subtract gap from actual xcoordinate to get exact value position
    let canvasY = Math.floor(e.pageY - pageGap.top);

      //get pixel content of area
    let pixel = context.getImageData(canvasX, canvasY, 1, 1);//returns image data of a particular rectangle with four values(Red, Green Blue and Alpha values(a measure of transparency))
    //(1,1)represent hight and width of rectangle area for 1pixel
    let pixelData = pixel.data;//return or store pixel information as an array

    //asign rgb color data to rgb input box
    let rgbPixelColor = "rgb(" + pixelData[0] + ", " + pixelData[1] + ", " + pixelData[2] + ")"; //convert data to rgb color
    document.querySelector("#rgbVal").value = rgbPixelColor

    //asign hex color data to hex input box
    let hexPixelColor = pixelData[2] + 256 * pixelData[1] + 65536 * pixelData[0];
    document.querySelector("#hexVal").value = "#" + hexPixelColor ;

    document.querySelector("#rgbVal").style.backgroundColor = rgbPixelColor
    document.querySelector("#hexVal").style.backgroundColor = rgbPixelColor
    document.querySelector("#rgbVal").style.borderColor = rgbPixelColor
    document.querySelector("#hexVal").style.borderColor = rgbPixelColor 
    document.querySelector("#main-canvas").style.backgroundColor = rgbPixelColor

    //draw an arc in canvas area
    let centerX = canvas.width / 2;
    let centerY = canvas.height / 2;
    let radius = 50;

    context.beginPath();
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    //context.fillStyle = 'green';
    //context.fill();
    context.lineWidth = 2;
    context.strokeStyle = rgbPixelColor;
    context.stroke(); 


});
