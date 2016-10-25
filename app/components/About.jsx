const React = require('react');

// const About = React.createClass({
// 	render: function() {
// 		return (
// 			<h3> About Component</h3>
// 		);
// 	}
// });

// Refactored into stateless component
const About = (props) => {
	return (
		<div>
			<h3>About</h3>
			<p>Welcome to the About page!</p>
		</div>
	);
}

module.exports = About;