
<?php
if($_POST["user"]!='admin'||$_POST["pwd"]!="admin"){
	echo false; 
	}else{
 echo '欢迎'.$_POST["user"].'用户登录'; 
 }