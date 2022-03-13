// https://teachablemachine.withgoogle.com/models/0JHdYfSEs/
Webcam.set({
    height:300,
    width:300,
    image_format:'png',
    png_quality:90
})
Webcam.attach("#camera");
function capture()
{
    Webcam.snap(function(data_uri){
       document.getElementById("image").innerHTML ="<img id='captured' src='"+data_uri+"'>" ;
    });
   
}
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/0JHdYfSEs/model.json" , modelReady)
function modelReady()
{
    console.log(ml5.version);
}

function check()
{
    img = document.getElementById("captured");
    classifier.classify(img,gotResult);
    
}
function gotResult(error , result)
{
    if (error)
    {
        console.log(error);
    }
    else 
    {
      console.log(result);
        var p1 = result[0].label;
        var p2 = result[1].label;
        document.getElementById("p_1").innerHTML = p1;
        document.getElementById("p_2").innerHTML = p2;
        if (p1 == 'happy')
        {
            document.getElementById("emoji").innerHTML = '&#128522;';
        }
        else if (p1 == 'sad')
        {
            document.getElementById("emoji").innerHTML = '&#128532;';
        }
        else if (p1 == 'angry')
        {
            document.getElementById("emoji").innerHTML = '&#128545;';
        
        }
        else if (p1 == 'surprise')
        {
            document.getElementById("emoji").innerHTML = '&#128512;';
        }



        if (p2 == 'happy')
        {
            document.getElementById("emoji1").innerHTML = '&#128522;';
        }
        else if (p2 == 'sad')
        {
            document.getElementById("emoji1").innerHTML = '&#128532;';
        }
        else if (p2 == 'angry')
        {
            document.getElementById("emoji1").innerHTML = '&#128545;';
        
        }
        else if (p2 == 'surprise')
        {
            document.getElementById("emoji1").innerHTML = '&#128512;';
        }
    }
}



    
