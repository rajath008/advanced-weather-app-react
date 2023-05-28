


import "./App.css";
import TopCities from "./components/TopCities";
import Input from "./components/Input";
import TimeLoc from "./components/TimeLoc";
import TempDetails from "./components/TempDetails";
import HourForecast from "./components/HourForecast";
import getFormattedWeatherData from "./service/WeatherService";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [query, setQuery] = useState({ q: "berlin" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const message = query.q ? query.q : "current location.";

      toast.info("Fetching weather for " + message);

      await getFormattedWeatherData({ ...query, units }).then((data) => {
        toast.success(
          `Successfully fetched weather for ${data.name}, ${data.country}.`
        );

        setWeather(data);
      });
    };

    fetchWeather();
  }, [query, units]);

  const formatBackground=()=>{
        if(!weather) return 'from-cyan-300 to-blue-700'
        const threshold=units==='metric'?21:60
    
        if(weather.temp<=threshold)return 'from-cyan-400 to-blue-800'
        
        return 'from-yellow-400 to-orange-600'
      }

  return (
    <div
      className={`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br  h-fit shadow-xl shadow-gray-400 ${formatBackground()}`}
    >
      <TopCities setQuery={setQuery} />
      <Input setQuery={setQuery} units={units} setUnits={setUnits} />

      {weather && (
        <div>
          <TimeLoc weather={weather} />
          <TempDetails weather={weather} />

          <HourForecast title="hourly forecast" items={weather.hourly} />
          <HourForecast title="daily forecast" items={weather.daily} />
        </div>
      )}

      <ToastContainer autoClose={5000} theme="colored" newestOnTop={true} />
    </div>
  );
}

export default App;