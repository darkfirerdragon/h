function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    
    video=createCapture(VIDEO);
    calassifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/[...]",modelloaded);
    }
    function draw(){
    image(video,0,0,300,300);
    calassifier.classify(video,gotresult);
    }
    function modelloaded(){
    console.log("modelloaded");
    }
    function gotresult(error,results){
    if(error){
    console.log("error");
    }
    else{
    console.log(results);
    document.getElementById("object_namê").innerHTML=results[0].label;
    document.getElementById("object_namē").innerHTML=results[0].confidence;
    }
    }