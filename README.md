WeatherApp

Overview
WeatherApp is a simple React application that allows users to search for and view the current weather conditions of any city. The app fetches weather data from the OpenWeatherMap API and displays it in an easy-to-read format.

Features
City Weather Search: Enter the name of a city to get the current weather information.
Weather Information Display: Shows temperature, humidity, min and max temperatures, feels-like temperature, and weather description.
Dynamic Weather Icons and Backgrounds: Visual representation of the weather with icons and background images.
Installation

Clone the repository:

bash
Copy code
git clone https://github.com/Farzeen002/WeatherApp.git
cd weatherapp

Install dependencies:


npm install
Start the development server:

npm run dev
You should see the following output indicating that the server is running:

> mini-project@0.0.0 dev
> vite

Re-optimizing dependencies because vite config has changed

VITE v5.3.1  ready in 998 ms

➜  Local:   http://127.0.0.1:5173/
➜  Network: use --host to expose  
➜  press h + enter to show help   
Open your browser and navigate to http://127.0.0.1:5173/ to see the application in action.

API Key Setup :

To use the OpenWeatherMap API, you need to create an account on OpenWeatherMap and get your own API key.

Sign Up: Create an account on the OpenWeatherMap website.

Get API Key: After logging in, navigate to the API keys section and generate a new API key.

Update API Key: Replace the placeholder API key in the SearchBox.jsx file with your own API key.

Contribution :

Contributions are welcome! Please feel free to submit a Pull Request.