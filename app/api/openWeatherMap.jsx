const axios = require('axios');
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=46e34e292f4088766deac97f284c5c40&units=imperial';

module.exports = {
	getTemp: function(location) {
		const encodedLocation = encodeURIComponent(location);
		// ES6 template string
		const requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

		return axios.get(requestUrl).then(function(response) {
			if (response.data.cod && response.data.message) {
				throw new Error(response.data.message);
			} else {
				return response.data.main.temp;
			}
		}, function(response) {
			throw new Error(response);
		})
	}
}