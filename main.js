var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function newImage()
{
	fabric.Image.fromURL('BirthdayImage.jpg', function(Img) {
        blockimagemObject.scaleToWidth(700);
        blockimagemObject.scaleToHeight(510);
        blockimagemObject.set({
            top:0,
            left:0
        });
        canvas.add(blockimagemObject);
    })
	
}

function playSound(){
	x.play();
}
