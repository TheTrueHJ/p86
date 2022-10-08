var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");
get_image = "BirthdayImage.jpg"
function new_image()
{
	fabric.Image.fromURL(get_image, function(Img) {
    object = Img;
	object.scaleToWidth(700);
    object.scaleToHeight(510);
    object.set({
        top: 0,
        left: 0
    });
    canvas.add(object);
});
}

function playSound(){
	x.play();
}
