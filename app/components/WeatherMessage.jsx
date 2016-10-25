const React = require('react');

// Refactored to stateless component and ES6 deconstrutoring syntax
const WeatherMessage = ({temp, location}) => {
	//ES6 deconstruct
	// const {temp, location} = props;

	return (
		<p className="text-center">{location} is {temp} degrees!</p>
	);
}


module.exports = WeatherMessage;