# Weather React App

This is a weather web application built with React and Tailwind CSS. It select cities automatically using geo location, allows users to search for and display current weather conditions for different cities.

## Features


- **Geo Location**: Search and select cities automatically using geo location from browser to show weather.
- **City Search**: Search and select cities to view their current weather.
- **Weather Details**: Displays temperature, wind speed, humidity, heat index, and general conditions.
- **Dynamic Background**: Changes background based on current weather conditions.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/weather-react-app.git
   cd weather-react-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the application:
   ```bash
   npm start
   ```

## Usage

1. Enter a city name in the search bar.
2. Press Enter or click the search icon.
3. View the current weather information and background.

## Components

### `MiniCard`

Displays time, temperature, and corresponding weather icon.

**Props**:
- `time`: The time for which the weather is forecasted.
- `temp`: The temperature at the given time.
- `iconString`: The string representing the weather condition to display the appropriate icon.

### `WeatherCard`

Displays detailed weather information for the selected city.

**Props**:
- `temperature`: The current temperature.
- `windspeed`: The current wind speed.
- `humidity`: The current humidity level.
- `place`: The name of the location.
- `heatIndex`: The heat index.
- `iconString`: The string representing the weather condition to display the appropriate icon.
- `conditions`: The current weather conditions.

### `BackgroundLayout`

Sets the background image based on current weather conditions.

## Technologies Used

- React
- Tailwind CSS
- Free Weather API

## License

This project is licensed under the MIT License.
```

Replace `https://github.com/dahalsandesh/weather-react-app.git` 