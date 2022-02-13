 Webcam.set({
     width:350,
     height:300,
     image_format : 'png',
     png_quality:90
 });

 camera = document.getElementById("camera");

 Webcam.attack('#camera');

 

 function take_snapshot()
 {
     Webcam.snap(funciton(data_uri) {
         docuemnt.getElementById("result").innerHTML = <img id ="captured_iamge" src="'+data_uri+;'"/>;
     
     });
 }

 console.log('ml5 version', m15.verison);

 classifier =  m15.iamgeClassifier('https://teachablemachine.withgoogle.com/models/KinVU0b4N/model.json',modelLoaded);


