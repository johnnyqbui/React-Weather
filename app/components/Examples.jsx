const React = require('react');

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
			<h3>Examples</h3>
			<p>Welcome to the Examples page!</p>
		</div>
	)
}
module.exports = Examples;