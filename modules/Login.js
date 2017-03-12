var React = require('react');
var NavLink = require('./NavLink');

var Login = React.createClass({
	getDefaultProps:function(){
		return{
			url:'./php/login.php'
		}
	},
	/*getInitialState:function(){
		return {
			username:'',
			password:''
		}
	},*/
	handlerSubmit:function(e){
		e.preventDefault();
		console.log('handlerSubmit');
		var username = this.refs.username.value;
		var password = this.refs.password.value;
		$.ajax({
			url:'http://www.hao669.online/demo/login.php',
			type:'post',
			data:'username='+username+'&password='+password,
			success:function(data){
				if(data === 'error'){
					alert('用户名或密码错误!')
				}else{
					console.log(data);
					document.cookie = "douban_username="+data;
					window.location.href="/";
				}
			},
			error:function(err){
				console.log(JSON.stringify(err));
			}
		})
	},
	render:function(){
		return(
			<div className="container">
		      <form className="form-signin">
		        <h2 className="form-signin-heading text_c">用户登录</h2>
		        <label for="inputEmail" className="sr-only">邮箱/手机号</label>
		        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus ref="username" />
		        <label for="inputPassword" className="sr-only">密码</label>
		        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required ref="password" />
		        <div className="checkbox">
		          <label>
		            <input type="checkbox" value="remember-me" /> 记住用户名
		          </label>
		        </div>
		        <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.handlerSubmit}>登录</button>
		      </form>
		    </div>
		)
	}
});

module.exports = Login;