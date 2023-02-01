
 const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '30d6f31d29msh80d0e602bfcb291p10394ajsnd9fc5b2e08a2',
		'X-RapidAPI-Host': 'open-weather-map27.p.rapidapi.com'
	}
};

fetch('https://open-weather-map27.p.rapidapi.com/weather', options)
	.then(response => response.json())
	.then(data => console.log(data.name))
	.catch(err => console.error(err));
 



/**
 * Weather App
 * TODO: Complete getWeatherData() to return json response Promise
 * TODO: Complete searchCity() to get user input and get data using getWeatherData()
 * TODO: Complete showWeatherData() to set the data in the the html file from response
 */

/* DIV ID's you'll need access to 👇
"city-name"
"weather-type"
"temp"
"min-temp"
"max-temp"
*/


/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this: 
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */
const getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  //HINT: Use template literals to create a url with input and an API key

  //CODE GOES HERE
}

/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */
const searchCity = () => {
  const city = document.getElementById('city-input').value;
  // CODE GOES HERE

}

/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
const showWeatherData = (weatherData) => {
  //CODE GOES HERE
  const response = JSON.stringify(weatherData)
  
}

