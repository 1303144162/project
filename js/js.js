// JavaScript Document

document.getElementById("hidd").onclick=function(){
	
var ajax=new XMLHttpRequest();
ajax.open("GET","");

ajax.send();

ajax.onreadystatechange=function(){
	//console.log(document.getElementById("hidd").innerHTML);
	if(document.getElementById("hidd").innerHTML=="△"){
 	document.getElementById("hidd").innerHTML="▽";
	document.querySelector(".login-form").style.visibility='hidden';
	document.querySelector(".login-form").style.position='absolute';
	document.querySelector(".login-form").style.opacity='0';
	
	

	}
	else if(document.getElementById("hidd").innerHTML=="▽"){
		document.getElementById("hidd").innerHTML="△";
	document.querySelector(".login-form").style.position='static';
	document.querySelector(".login-form").style.visibility='inherit';
	document.querySelector(".login-form").style.opacity='1';
	
		
	
		}
		else{
	
	document.getElementById("hidd").innerHTML="△";
	document.querySelector(".login-form").style.position='static';
	document.querySelector(".login-form").style.visibility='inherit';
	document.querySelector(".login-form").style.opacity='1';
	document.querySelector("#toptag").innerHTML="请登录";
			}
}
}

document.querySelector("#login").onclick=function(){
	var ajax2=new XMLHttpRequest();
	ajax2.open("POST",'http://localhost/project/php/data.php',true);
	ajax2.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	ajax2.send("user="+document.querySelector("#user").value+"&pwd="+document.querySelector("#pwd").value);
	ajax2.onreadystatechange=function(){
		
		if (ajax2.readyState==4 && ajax2.status==200){
		//console.log(document.querySelector("#user").value);
		if(ajax2.responseText!=false){
		
		document.querySelector("#toptag").innerHTML=ajax2.responseText;
		document.getElementById("hidd").innerHTML="注销";
	document.querySelector(".login-form").style.visibility='hidden';
	document.querySelector(".login-form").style.position='absolute';
	document.querySelector(".login-form").style.opacity='0';
	document.querySelector("#error").style.display="none";
		}
		else{
			document.querySelector("#error").style.display="inherit";
			}
		}
		
	}	

		
		
	}
