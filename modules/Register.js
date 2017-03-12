var React = require('react');
var NavLink = require('./NavLink');

var Register = React.createClass({
	handlerRegist:function(e){
		e.preventDefault();
		console.log('handlerRegist');
		var username = this.refs.username.value;
		var password = this.refs.password.value;
		console.log(username,password);
		if(username === '' || password === ''){
			alert('请正确输入信息！');
		}else{
			$.ajax({
			url:'http://www.hao669.online/demo/register.php',
			type:'post',
			data:'username='+username+"&password="+password,
			success:function(data){
				if(data === 'success'){
					alert('注册成功！');
					window.location.href = './#/login';
				}
			},
			error:function(err){
				console.log(err);
			}
			})
		}
		
	},
	render:function(){
		return(
			<div className="container">
		      <form className="form-signin">
		        <h2 className="form-signin-heading text_c">注册</h2>
		        <label for="inputEmail" className="sr-only">邮箱/手机号</label>
		        <input type="email" id="inputEmail" className="form-control" placeholder="邮箱号或手机号" required autofocus ref="username" />
		        <label for="inputPassword" className="sr-only">密码</label>
		        <input type="password" id="inputPassword" className="form-control" placeholder="设置密码" required ref="password" />
		        <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.handlerRegist}>注册</button>
		      </form>
		    </div>
		)
	}
});

module.exports = Register;