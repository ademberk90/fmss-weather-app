import logo from "./logo.svg";
import "./App.css";
//import cities from "./helpers/cities";
import { CityProvider } from "./context/CityContext";
import { WeatherProvider } from "./context/WeatherContext";
import SearchBox from "./components/SearchBox";
import WeatherBox from "./components/WeatherBox";

function App() {
  return (
    <div className="App">
      <CityProvider>
        <WeatherProvider>
          <SearchBox/>
          <WeatherBox/>
        </WeatherProvider>
      </CityProvider>
    </div>
  );
}

export default App;
