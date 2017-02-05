const config = {
  apiKey: "AIzaSyC3mq8GoVIYRSDMCDtqPEMd837Kizv2EzA",
  authDomain: "opendoor-acf3a.firebaseapp.com",
  databaseURL: "https://opendoor-acf3a.firebaseio.com",
  storageBucket: "opendoor-acf3a.appspot.com",
  messagingSenderId: "903661368930",
};

firebase.initializeApp(config);


function checkStudent(form){
	if (form.email.value == "atatmaja" && form.pass.value == "foosball"){
		window.open("https://www.youtube.com/")
	}
	else{
		alert("Incorrect Login Credentials")
	}
}

function checkFaculty(form){
	if (form.email.value == "sbirkett" && form.pass.value == "partytricks"){
		window.open("OpenDoorHome.html")
	}
	else{
		alert("Incorrect Login Credentials")
	}
}


