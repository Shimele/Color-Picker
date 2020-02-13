let canvas = document.getElementById("main-canvas")
let context = canvas.getContext("2d");
//draw image in canvas
let img = new Image();
img.src = 'image.png';
img.onload = function(){
  context.drawImage(img,0,0,img.width, img.height);
};

document.querySelector("#main-canvas").addEventListener("click", e =>{
    let pageGap = $(canvas).offset();//get value of extra gap between window and image
    let canvasX = Math.floor(e.pageX - pageGap.left);//subtract gap from actual coordinate to get exact value position
    let canvasY = Math.floor(e.pageY - pageGap.top);

      //get pixel content of area
    let imageData = context.getImageData(canvasX, canvasY, 1, 1);//returns image data of a particular rectangle with four values(Red, Green Blue and Alpha values)
    //(1,1)represent hight and width of rectangle area for 1pixel
    let pixel = imageData.data;//return information as an array

    $('#rgbVal').val(pixel[0] + ',' + pixel[1] + ',' + pixel[2]);
    let dColor = pixel[2] + 256 * pixel[1] + 65536 * pixel[0];
    $('#hexVal').val( '#' + dColor.toString(16) );

});
