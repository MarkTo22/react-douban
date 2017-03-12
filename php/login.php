<?php
	header('Access-Control-Allow-Origin:http://localhost:8080');
	$username = $_POST["username"];
	$password = $_POST["password"];

	//建立连接
	$conn = mysql_connect("bdm242626556.my3w.com","bdm242626556","qazplm12345");
	//数据库名
	mysql_select_db("bdm242626556_db");
	//sql语句
	$select = "SELECT * FROM douban_users WHERE username='$username' AND password='$password'";
	//执行sql语句
	$result = mysql_query($select,$conn);
	//得到查询结果行
	$row = mysql_fetch_array($result,MYSQL_ASSOC);
	if($row){
		echo $username;
	}else{
		echo 'error';
	}

	mysql_close($conn);

?>