var React = require('react');
var NavLink = require('./NavLink');
var IndexLink = require('react-router').IndexLink;

var App = React.createClass({
	contextTypes: {
		router: React.PropTypes.object
	},
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
				// console.log(y);
				if($.trim(y[0]) == 'douban_username'){
					_this.setState({
						username:$.trim(y[1])
					})
					//console.log($.trim(y[1]));
					
				}
			}
		}
	},
	componentDidMount:function(){
		if(this.state.username){
			$(this.refs.login).remove();
			$(this.refs.register).remove();
		}
		
	},
	
	handlerSearch:function(){
		var _this = this;
		var search_cont = this.refs.search_cont.value;
		$.ajax({
			url:"http://api.douban.com/v2/movie/search?",
			type:'get',
			data:'q='+search_cont,
			dataType:'jsonp',
			success:function(data){
				// console.log(data);
				_this.context.router.push({
					pathname:'/search',
					state:data
				});
			}
		})
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
				              <a className="navbar-brand" href="#">豆豆</a>
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
				                    <li ref="register"><NavLink to="/register">注册</NavLink></li>
				                  </ul>
				                </li>
				              </ul>
							  	<form className="navbar-form navbar-right search">
						        	<div className="input-group">
							      <input type="text" className="form-control" placeholder="张艺谋" ref="search_cont" />
							      <span className="input-group-btn">
							        <button className="btn btn-default" type="button" onClick={this.handlerSearch}>搜索</button>
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