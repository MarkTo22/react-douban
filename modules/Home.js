var React = require('react');
var NavLink = require('./NavLink');

var Home = React.createClass({
	render:function(){
		return(
		<div className="container">

		      <div className="jumbotron">
		        <h1>Marketing stuff!</h1>
		        <p className="lead">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet.</p>
		        <p><a className="btn btn-lg btn-success" href="#" role="button">Get started today</a></p>
		      </div>

		      <div className="row">
		        <div className="col-lg-4">
		          <h2>Safari bug warning!</h2>
		          <p className="text-danger">As of v9.1.2, Safari exhibits a bug in which resizing your browser horizontally causes rendering errors in the justified nav that are cleared upon refreshing.</p>
		          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
		          <p><a className="btn btn-primary" href="#" role="button">View details &raquo;</a></p>
		        </div>
		        <div className="col-lg-4">
		          <h2>Heading</h2>
		          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
		          <p><a className="btn btn-primary" href="#" role="button">View details &raquo;</a></p>
		       </div>
		        <div className="col-lg-4">
		          <h2>Heading</h2>
		          <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa.</p>
		          <p><a className="btn btn-primary" href="#" role="button">View details &raquo;</a></p>
		        </div>
		      </div>
		</div>
		)
	}
})

module.exports = Home;