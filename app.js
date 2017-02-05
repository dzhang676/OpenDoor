
function checkStudent(form){
	if (form.email.value == "atatmaja" && form.pass.value == "foosball"){
		window.open("OpenDoorHome.html")
	}
	else{
		alert("Incorrect Login Credentials")
	}
}

function checkFaculty(form){
	if (form.email.value == "sbirkett" && form.pass.value == "partytricks"){
		window.open("OpenDoorProfessor.html")
	}
	else{
		alert("Incorrect Login Credentials")
	}
}

var profcheckin = document.getElementById("profcheckin");

var profcheckout = document.getElementById("profcheckout");

var profStatusRef = firebase.database().ref();

function checkinprof(){
	profStatusRef.child("Status").set("Available");
}

function checkoutprof(){
	var profoutRef = firebase.database().ref();
	profStatusRef.child("Status").set("Not In Office");
}




