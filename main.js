function preload(){

}

function setup(){
canvas = create.canvas(640, 420);
canvas.center();
}
img = "";
status ="";
objects = [];

function draw(){
    image(img,  0 , 0 , 640, 420);
    if(status != "")
    {
        for(i = 0; i< object.length; i++)
        {
            document.getElementById("status").innerHTML = "Status : Object Detected"
            fill("#FF0000");
            percent = floor(objects[i].confidence * 100);
            Text(objects[i].label + " " + percent + "%", objects[i].x +15, objects[1].y + 15);  
            nofill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y , objects[i].width , objects[i].height);
        }
    }

  

    
}
function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status").innerHTML ="Status : Detecting Object";
}
function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}
function gotResult(error, results) {
    if (error){
        console.log(error);
    }
    console.log(results);
    objects = results;
}