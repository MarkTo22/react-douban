var React = require('react');
var NavLink = require('./NavLink');

var Search = React.createClass({
	getDefaultProps:function(){
		return {
			url:'http://localhost:3000/db'
		}
	},
	getInitialState:function(){
		return {
			list:[]
		}
	},
	componentWillMount:function(){
		// console.log('componentWillMount...');
	},
	render:function(){
		var results = this.props.location.state.subjects;
		console.log(results);
		var ls = [];
		var len = results.length;
		if(len>0){
			for(var i=0;i<len;i++){
				var item = results[i];
				var detailUrl = "/detail/" + item.id;
				ls.push(
					<div className="col-lg-3 list" key={i*100}>
			          <img  
			          src={item.images.medium} 
			          alt="Generic placeholder image" width="200" height="200"/>
			          <h2 className="overhidden">{item.title}</h2>
			          <p>{item.summary}</p>
			          <p>
			          <NavLink to={detailUrl} className="btn btn-default" role="button">
			         	查看详情 &raquo;</NavLink></p>
			        </div>
				)
			}
		}else{
			ls.push(
				<h2>小豆豆没找到结果，请换个关键词搜索...</h2>
				)
		}
		return (
			<div className="container marketing">
		      <div className="row">
		        <h3>结果:</h3>
		      	{ls}
		      </div>
			</div>
		)
	}
});

module.exports = Search;