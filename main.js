function setup(){
    Canvas = createCanvas(500,350);
    Canvas.position(517,280);
    Video = createCapture(VIDEO);
    Video.center();
    Video.hide();
    classifier = ml5.imageClassifier('https://storage.googleapis.com/tm-model/Rcc0YlK8u/model.json',modelLoaded)
}
function modelLoaded(){
    console.log("Model Loaded");
}
function gotResult(error,results){
    if (error){
        console.log(error);
    }
    else{
        console.log(results);

        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}
function draw(){
    image(Video,0,0,500,350);
    classifier.classify(Video,gotResult);
}

