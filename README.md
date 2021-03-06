# 🌦 Live Weather Web Application ☔️
This is a fully functioning live weather web application written in JavaScript.\
It can be accessed through this URL: https://ibra-weather-application.herokuapp.com/

## How to Use
  - The web app has three tabs: Weather, About and Help.
  - The Weather tab is the main tab in which you use to retrieve the weather.
    - In the textbox, simply enter the name of location in which you would like to recieve the current weather for.
    - If the location name is valid, it will retreive the current weather of that location and put it on to the screen.
    - There may be instances where multiple locations have a common name. If that occurs and the forecast information you see is for a location other than the one you are looking for, you can be more specific in your search to retreive the weather of the exact location you are refering to.
    - If an invalid location name is entered, the application will let you know that it is unable to find that location.
  - The About tab breifly describes where the weather and location data are coming from.
  - The Help tab insructs the user on how to use the app to retreive a live weather forecast for a desried location. 

## How it Works
  - This application was written mainly in JavaScript with the backend using Node to make HTTP Requests to the two APIs in use.
  - The two APIs in use are WeatherStack and MapBox:
    - The WeatherStack API takes a longitude and latitude as input and returns a JSON object containing different attributes of the weather like Temperature, Humidity, Precipitation, Wind Speed, etc.
    - The MapBox API has a Geocode endpoint which takes in a string with a location name and return a JSON object with two attributes - the Longitude and Latitude.
  - I figured the average user has no idea what the longitude and latitude of the location in which they want the weather for is, for this reason, their input of the location name is used to hit the MapBox API. This GET request to the API will then respond with a longitude and latitude (if it exists), and the response is fed into another GET request to the WeatherStack API to retreive the current weather of that location. 
  - Certain attributes of the weather from the response of the WeatherStack API are extracted and placed into a template string, the template string is then printed to the user's screen.
  - Error handling is in place to account for invalid locations, and times when either of the APIs in use are down. 
