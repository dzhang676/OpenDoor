
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

var birkettStatus = document.getElementById("birkettStatus");

var profStatusRef = firebase.database().ref();

function checkinprof(){
	profStatusRef.child("Status").set("Available");
}

function checkoutprof(){
	profStatusRef.child("Status").set("Not In Office");
}

function checkinstudent(){
	profStatusRef.child("Status").set("Currently With Student");
}

profStatusRef.child("Status").on("value", function(snapshot){
	console.log(snapshot.val())
	if(birkettStatus.innerHTML != null){
		birkettStatus.innerHTML = snapshot.val();
	}
});







