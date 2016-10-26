const React = require('react');
const WeatherForm = require('WeatherForm');
const WeatherMessage = require('WeatherMessage');
const openWeatherMap = require('openWeatherMap');
const ErrorModal = require('ErrorModal');

const Weather = React.createClass({
	getInitialState: function() {
		return {
			isLoading: false
		}
	},

	handleSearch: function(location) {
		const _this = this;

		this.setState({
			isLoading: true,
			errorMessage: undefined,
			location: undefined,
			temp: undefined
		});

		openWeatherMap.getTemp(location).then(function(temp) {
			_this.setState({
				location: location,
				temp: temp,
				isLoading: false
			});
		}, function(e) {
			_this.setState({
				isLoading: false,
				errorMessage: e.message
			})
		})
	},

	componentDidMount: function() {
		const location = this.props.location.query.location;

		if (location && location.length > 0) {
			this.handleSearch(location);

			// Remove location url query parameter after search
			window.location.hash = '#/';
		}
	},

	// Whenever component props get updated
	componentWillReceiveProps: function(newProps) {
		console.log(newProps)
		const location = newProps.location.query.location;

		if (location && location.length > 0) {
			this.handleSearch(location);

			// Remove location url query parameter after search
			window.location.hash = '#/';
		}
	},

	render: function() {
		// ES6 destructoring
		const {isLoading, temp, location, errorMessage} = this.state;

		function renderMessage() {
			if (isLoading) {
				return <h3 className="text-center">"Fetching weather..."</h3>
			} else if (location && temp) {
				return <WeatherMessage location={location} temp={temp}/>
			}
		}

		function renderError() {
			if (typeof errorMessage === 'string') {
				return (
					<ErrorModal message={errorMessage}/>
				)
			}
		}

		return (
			<div>
				<h1 className="text-center page-title">Get Weather</h1>
				<WeatherForm onSearch={this.handleSearch}/>
				{renderMessage()}
				{renderError()}
			</div>
		);
	}
})

module.exports = Weather;