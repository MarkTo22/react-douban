var React = require('react');
var NavLink = require('./NavLink');
var IndexLink = require('react-router').IndexLink;

var App = React.createClass({
	getInitialState:function(){
		return {
			username:[]
		}
	},
	componentWillMount:function(){
		var _this = this;
		if(document.cookie){
			var x = document.cookie;
			var arr = x.split(';');
			for(var item in arr){
				var y = arr[item].split('=');
				console.log(y);
				if($.trim(y[0]) == 'douban_username'){
					_this.setState({
						username:$.trim(y[1])
					})
					console.log($.trim(y[1]),_this.refs.login);
					
				}
			}
		}
	},
	render:function(){
		
		return (
				 <div className="navbar-wrapper">
      				<div className="container">
						<nav className="navbar navbar-inverse navbar-static-top">
				          <div className="container">

				            <div className="navbar-header">
				              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
				                <span className="sr-only">Toggle navigation</span>
				                <span className="icon-bar"></span>
				                <span className="icon-bar"></span>
				                <span className="icon-bar"></span>
				              </button>
				              <a className="navbar-brand" href="#">打豆豆</a>
				            </div>
				            <div id="navbar" className="navbar-collapse collapse">
				              <ul className="nav navbar-nav">
				                <li><IndexLink to="/">首页</IndexLink></li>
				                <li><NavLink to="/movies">电影</NavLink></li>
				                <li><NavLink to="/musics">音乐</NavLink></li>
				                <li className="dropdown">
				                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">更多<span className="caret"></span></a>
				                  <ul className="dropdown-menu">
				                    <li><a href="#">下载客户端</a></li>
				                    <li><a href="#">阅读</a></li>
				                    <li ref="login"><NavLink to="/login">登录</NavLink></li>
				                    <li><NavLink to="/register">注册</NavLink></li>
				                  </ul>
				                </li>
				              </ul>
							  	<form className="navbar-form navbar-right search">
						        	<div className="input-group">
							      <input type="text" className="form-control" placeholder="Search for..."/>
							      <span className="input-group-btn">
							        <button className="btn btn-default" type="button">搜索</button>
							      </span>
							    </div>
						      	</form>

				            </div>

				           
				            

						  

				          </div>
				        </nav>

				        {this.props.children}
						
				         <footer>
					        <p className="pull-right"><a href="#">Back to top</a></p>
					        <p>&copy; 2016 Company, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
						 </footer>
					</div>
				</div>
		)
	}
});

module.exports = App;