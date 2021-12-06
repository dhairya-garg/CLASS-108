https://teachablemachine.withgoogle.com/models/VMB3qKQuU/

function Startclassification(){
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/VMB3qKQuU/model.json', modelReady)
    
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error,results){
    if (error){
        console.error(error)
    }else{
        console.log(results)
        random_number_r = Math.floor(Math.random()* 255)+ 1
        random_number_b = Math.floor(Math.random()* 255)+ 1
        random_number_g = Math.floor(Math.random()* 255)+ 1
    }
    document.getElementById("results_label").innerHTML= 'i can hear -'+results[0].label;
    document.getElementById("results_confidence").innerHTML= 'accuracy -'+(results[0].confidence*100).toFixed(2)+"%"
    document.getElementById("results_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")"

    document.getElementById("results_confidence").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")"

    img= document.getElementById("alien1")
    img1= document.getElementById("alien2")
    img2= document.getElementById("alien3")
    img3= document.getElementById("alien4")
   
    if(results[0].label == "clap"){
        img='aliens-01.gif'
        img1='aliens-02.png'
        img2='aliens-03.png'
        img3='aliens-04.png'
    }else if(results[0].label =="background noise"){
        img='aliens-01.png'
        img1='aliens-02.gif'
        img2='aliens-03.png'
        img3='aliens-04.png '
    }else if (results[0].label == "bell"){
        img='aliens-01.png'
        img1='aliens-02.png'
        img2='aliens-03.gif'
        img3='aliens-04.png'
    }else {
        img='aliens-01.png'
        img1='aliens-02.png'
        img2='aliens-03.png'
        img3='aliens-04.gif'
    }
}
