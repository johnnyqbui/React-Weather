const React = require('react');
const {Link} = require('react-router');

// const Examples = React.createClass({
// 	render: function() {
// 		return (
// 			<h3> Examples Component</h3>
// 		);
// 	}
// })

// Refactored into stateless component
const Examples = (props) => {
	return (
		<div>
			<h1 className="text-center page-title">Examples</h1>
			<p>Here are some example locations to try out!</p>
			<ol>
				<li>
					<Link to="/?location=Houston" >Houston, TX</Link>
				</li>
				<li>
					<Link to="/?location=Austin" >Austin, TX</Link>
				</li>
			</ol>
		</div>
	)
}
module.exports = Examples;