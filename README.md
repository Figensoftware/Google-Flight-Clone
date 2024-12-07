# Google Flight Clone

This project is a flight search application built to mimic the Google Flights interface. It allows users to search for flight prices based on origin, destination, and date. The app is built with **React**, **Redux**, **Material-UI (MUI)**, **Axios**.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Redux**: A state management library for React applications.
- **Material-UI (MUI)**: A UI component library for React.
- **Axios**: For making HTTP requests to external APIs.
- **Redux Toolkit**: For simplifying Redux development.
- **Emotion**: For styling MUI components.

## Setup Instructions

Follow these steps to get the project up and running:

### 1. Clone the repository

```bash
git clone https://github.com/Figensoftware/Google-Flight-Clone.git
cd Google-Flight-Clone
```

### 2. Create the project using Vite

If you’re starting from scratch, you can use Vite to create a React project.

```bash
npm create vite@latest google-flight -- --template react
cd google-flight
```

### 3. Install dependencies

Run the following commands to install the required libraries:

```bash
npm install @reduxjs/toolkit react-redux
npm install @mui/icons-material @mui/material @emotion/styled @emotion/react
npm install axios
```

These libraries are used for state management (Redux), Material-UI components, API requests (Axios).

### 4. Run the app

To start the development server, run:

```bash
npm run dev
```

This will start the app on `http://localhost:3000`.

## Features

- **Flight Price Search**: Allows users to search for flight prices based on origin, destination, and date.
- **API Integration**: Fetches flight price data using an external API.
- **Redux State Management**: Handles global state such as loading status, flight data, and theme.
- **Material-UI Components**: Uses MUI for building a responsive and modern UI.
- **Theme Management with Redux**: Toggles between light and dark mode using Redux.
- **Drawer State Management**: Manages the drawer state for the sidebar using Redux.

## Project Structure

```plaintext
src/
├── components/          # Reusable components like SearchForm, FlightList, etc.
├── redux/               # Redux-related files (actions, reducers, store)
│   ├── actions/         # Redux action creators
│   ├── reducers/        # Redux reducers
│   ├── store.js         # Redux store configuration
├── pages/               # Pages for different routes (if used in the future)
├── App.js               # Main app component
├── index.js             # Entry point for the React app
└── styles/              # Global styles and custom CSS
```

## Redux Setup

Redux is used to manage the application's state. Here's a brief overview of the setup:

### Actions

- `setTheme`: Updates the theme (e.g., light or dark mode).
- `setDrawer`: Toggles the drawer state for the sidebar.

### Reducers

Reducers handle the state updates based on dispatched actions. For example, a reducer to manage the theme and drawer:

```js
const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    setDrawer: (state) => {
      state.drawer = !state.drawer;
    },
  },
});
```

### Store Configuration

The store is where we combine the reducers and apply middleware. It is configured using Redux Toolkit.

```js
import { configureStore } from '@reduxjs/toolkit';
import appReducer from './reducers/appReducer';

const store = configureStore({
  reducer: {
    app: appReducer,
  },
});

export default store;
```

## API Integration

Flight data is fetched from an external API using Axios. Below is an example API call.

### Example API Call

```js
const fetchFlightData = async (origin, destination, date) => {
  try {
    const response = await axios.get('https://api.example.com/flights', {
      params: { origin, destination, date }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching flight data:', error);
  }
};
```

## Contributing

Feel free to fork this repository and submit pull requests. Contributions are welcome!

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

# Google-Flight-Clone
Google Flight Clone : Spotter Front End Developer Job | Next Steps
