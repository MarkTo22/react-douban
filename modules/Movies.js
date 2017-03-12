var React = require('react');
var NavLink = require('./NavLink');

var Movies = React.createClass({
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
		var _this = this;
		$.ajax({url:this.props.url}).then(function(res){
			_this.setState({
				list: res.subjects
			})
		})
	},
	render:function(){
		//console.log(this.state.list);
		if(this.state.list.length>0){
			var lst = [];
			var data = this.state.list;
			var listLen = data.length;
			for(var i =0;i<listLen;i++){
				// console.log(data[i])
				var detailUrl = "/detail/" + data[i].id;
				lst.push(
					<div className="col-lg-3 list" key={i}>
			          <img  
			          src={data[i].images.medium} 
			          alt="Generic placeholder image" width="200" height="200"/>
			          <h2 className="overhidden">{data[i].title}</h2>
			          <p>{data[i].summary}</p>
			          <p>
			          <NavLink to={detailUrl} className="btn btn-default" role="button">
			         	查看详情 &raquo;</NavLink></p>
			        </div>
				)
			}

		}

		return (
			<div className="container marketing">
		      <div className="row">
		        {lst}
		      </div>
			</div>
		)
	}
});

module.exports = Movies;