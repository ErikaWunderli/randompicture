
var imagesArray = ["SAM_7386.JPG", "SAM_7447.JPG", "SAM_8064.JPG", "SAM_8077.JPG", "SAM_8876.JPG", "SAM_8882.JPG"];

function displayImage() {
var num = Math.floor(Math.random() * (imagesArray.length));
document.getElementById("canvas").src = imagesArray[num];
}
displayImage ();