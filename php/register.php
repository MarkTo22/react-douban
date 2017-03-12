<?php
	header('Access-Control-Allow-Origin:http://localhost:8080');
	$username = $_POST["username"];
	$password = $_POST["password"];

	//建立连接
	$conn = mysql_connect("bdm242626556.my3w.com","bdm242626556","qazplm12345");
	//连接数据库
	mysql_select_db("bdm242626556_db");
	//插入数据--sql语句
	$put = "INSERT INTO douban_users VALUES (NULL, '$username', '$password')";
	//执行sql语句
	$result = mysql_query($put,$conn);
	//判断是否插入数据成功
	if($result){
		echo 'success';
	}else{
		echo 'error';
	}

	mysql_close($conn);

?>