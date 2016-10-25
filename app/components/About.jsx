const React = require('react');
// const About = React.createClass({
// 	render: function() {
// 		return (
// 			<h3> About Component</h3>
// 		);
// 	}
// });

// Refactored into stateless component
const About = () => {
	return (
		<div>
			<h1 className="text-center">About</h1>
			<p>My very first React Weather App!</p>
			<p>Technologies used: </p>
			<ul>
				<li>React</li>
				<li>Webpack</li>
				<li>Foundation</li>
				<li>Babel</li>
				<li><a href="http://openweathermap.org">OpenWeatherMap API</a></li>
			</ul>
			<h3 className="text-center">Find me:</h3>
			<div className="menu-centered">
				<ul className="menu">
					<a className="fa fa-fw fa-github fa-3x" href="https://github.com/johnnyqbui"></a>
					<a className="fa fa-fw fa-codepen fa-3x" href="https://codepen.io/jbui/"></a>
				</ul>
			</div>
		</div>
	);
}

module.exports = About;