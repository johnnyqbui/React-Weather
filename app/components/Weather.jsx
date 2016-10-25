const React = require('react');
const WeatherForm = require('WeatherForm');
const WeatherMessage = require('WeatherMessage');
const openWeatherMap = require('openWeatherMap');

const Weather = React.createClass({
	getInitialState: function() {
		return {
			isLoading: false
		}
	},

	handleSearch: function(location) {
		const _this = this;

		this.setState({isLoading: true});

		openWeatherMap.getTemp(location).then(function(temp) {
			_this.setState({
				location: location,
				temp: temp,
				isLoading: false,
			});
		}, function(errorMessage) {
			_this.setState({
				isLoading: false
			})
			alert(errorMessage);
		})
	},

	render: function() {
		// ES6 destructoring
		const {isLoading, temp, location} = this.state;

		function renderMessage() {
			if (isLoading) {
				return <h3 className="text-center">"Fetching weather..."</h3>
			} else if (location && temp) {
				return <WeatherMessage location={location} temp={temp}/>
			}
		}

		return (
			<div>
				<h1 className="text-center">Get Weather</h1>
				<WeatherForm onSearch={this.handleSearch}/>
				{renderMessage()}
			</div>
		);
	}
})

module.exports = Weather;