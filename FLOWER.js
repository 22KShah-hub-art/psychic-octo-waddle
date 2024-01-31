function back()
{
    window.location="index.html";
}

status1="";

function preload()
{
    img=loadImage("Flower.JPG");
}

function setup()
{
   canvas=createCanvas(640,420);
   canvas.center();
   objectDetector=ml5.objectDetector('cocossd', modelLoaded);
   document.getElementById("status").innerHTML="status:Detecting Objects";
}

function modelLoaded()
{
status1=true;
console.log("model Loaded");
objectDetector.detect(img, gotResult);
}

function gotResult(error, results)
{
if(error){
    console.log(error);
}
console.log(results);
}