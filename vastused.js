function kysimus1(){


    if(document.getElementById("kys1vas2").checked == true){
        document.getElementById("kys1").style.background = "green";
        document.getElementById("vastus").innerHTML = "õige";
    } else {
        document.getElementById("kys1").style.background = "red";
        document.getElementById("vastus").innerHTML = "vale";
    }
}