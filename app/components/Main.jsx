const React = require('react');
const Nav = require('Nav');

// const Main = React.createClass({
// 	render: function() {
// 		return (
// 			<div>
// 				<Nav/>
// 				<h2>Main Component</h2>
// 				{this.props.children}
// 			</div>
// 		);
// 	}
// })

// If only render method used, then refactor into stateless coomponent
const Main = (props) => {
	return (
		<div>
			<Nav/>
			<h2>Main Component</h2>
			{props.children}
		</div>
	);
}

module.exports = Main;