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
  - Used the Weather Stack and Geocode APIs to create a weather app that fetches live weather feed for the user upon an inputted location.
  - The backend of this application uses Node to make HTTP Requests to the two APIs in use.
