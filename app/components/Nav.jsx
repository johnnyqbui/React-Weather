const React = require('react');

//ES6 destructoring, equals link property of the right. So, require(react-router).link
const{Link, IndexLink} = require('react-router');

// const Nav = React.createClass({
// 	render: function() {
// 		return (
// 			<div>
// 				<h2>Nav Component</h2>
// 				<IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
// 				<Link to="/about"  activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
// 				<Link to="/examples"  activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
// 			</div>
// 		)
// 	}
// })

// Refactored into stateless component
const Nav = (props) => {
	return (
		<div>
			<h2>Nav Component</h2>
			<IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
			<Link to="/about"  activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
			<Link to="/examples"  activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
		</div>
	)
}
module.exports = Nav;