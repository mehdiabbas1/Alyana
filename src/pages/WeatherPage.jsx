import React, { useState, useEffect } from 'react';
    import { motion } from 'framer-motion';
    import { Sun, Cloud, CloudRain, CloudSnow, Search, MapPin, Thermometer, Wind, Droplets } from 'lucide-react';
    import { Button } from '@/components/ui/button';
    import { Input } from '@/components/ui/input';
    import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
    import { useToast } from '@/components/ui/use-toast';

    const mockWeatherData = {
      "New York": {
        current: { temp: 15, condition: "Cloudy", humidity: 70, wind: 10, icon: <Cloud size={48} className="text-blue-300" /> },
        forecast: [
          { day: "Mon", temp: 16, condition: "Cloudy", icon: <Cloud size={24} /> },
          { day: "Tue", temp: 18, condition: "Sunny", icon: <Sun size={24} /> },
          { day: "Wed", temp: 17, condition: "Rainy", icon: <CloudRain size={24} /> },
        ],
      },
      "London": {
        current: { temp: 12, condition: "Rainy", humidity: 85, wind: 15, icon: <CloudRain size={48} className="text-blue-400" /> },
        forecast: [
          { day: "Mon", temp: 13, condition: "Rainy", icon: <CloudRain size={24} /> },
          { day: "Tue", temp: 14, condition: "Cloudy", icon: <Cloud size={24} /> },
          { day: "Wed", temp: 12, condition: "Rainy", icon: <CloudRain size={24} /> },
        ],
      },
      "Tokyo": {
        current: { temp: 22, condition: "Sunny", humidity: 60, wind: 5, icon: <Sun size={48} className="text-yellow-400" /> },
        forecast: [
          { day: "Mon", temp: 23, condition: "Sunny", icon: <Sun size={24} /> },
          { day: "Tue", temp: 24, condition: "Sunny", icon: <Sun size={24} /> },
          { day: "Wed", temp: 22, condition: "Cloudy", icon: <Cloud size={24} /> },
        ],
      },
       "Paris": {
        current: { temp: 18, condition: "Partly Cloudy", humidity: 65, wind: 8, icon: <Cloud size={48} className="text-sky-300" /> },
        forecast: [
          { day: "Mon", temp: 19, condition: "Partly Cloudy", icon: <Cloud size={24} /> },
          { day: "Tue", temp: 20, condition: "Sunny", icon: <Sun size={24} /> },
          { day: "Wed", temp: 18, condition: "Cloudy", icon: <Cloud size={24} /> },
        ],
      },
    };
    
    const WeatherPage = () => {
      const [city, setCity] = useState('New York');
      const [searchTerm, setSearchTerm] = useState('New York');
      const [weatherData, setWeatherData] = useState(null);
      const [loading, setLoading] = useState(false);
      const { toast } = useToast();

      useEffect(() => {
        fetchWeather(city);
      }, [city]);

      const fetchWeather = (queryCity) => {
        setLoading(true);
        
        setTimeout(() => {
          const data = mockWeatherData[queryCity];
          if (data) {
            setWeatherData(data);
            toast({
              title: "Weather Updated!",
              description: `Showing weather for ${queryCity}.`,
              className: "bg-green-500 border-green-500 text-white",
            });
          } else {
            setWeatherData(null);
            toast({
              title: "City Not Found",
              description: `Could not find weather data for ${queryCity}. Please try another city.`,
              variant: "destructive",
            });
          }
          setLoading(false);
        }, 1000);
      };

      const handleSearch = (e) => {
        e.preventDefault();
        if (searchTerm.trim() === "") {
          toast({
            title: "Empty Search",
            description: "Please enter a city name.",
            variant: "destructive",
          });
          return;
        }
        setCity(searchTerm);
      };
      
      const getWeatherIcon = (condition, size = 48) => {
        const iconProps = { size, className: "mx-auto" };
        if (condition?.toLowerCase().includes("cloud")) return <Cloud {...iconProps} />;
        if (condition?.toLowerCase().includes("sun") || condition?.toLowerCase().includes("clear")) return <Sun {...iconProps} className="text-yellow-400" />;
        if (condition?.toLowerCase().includes("rain")) return <CloudRain {...iconProps} className="text-blue-400" />;
        if (condition?.toLowerCase().includes("snow")) return <CloudSnow {...iconProps} className="text-blue-200" />;
        return <Thermometer {...iconProps} />;
      };


      return (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto p-4 md:p-8 max-w-3xl w-full"
        >
          <header className="text-center mb-8">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 mb-2"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              WeatherSphere
            </motion.h1>
            <motion.p 
              className="text-lg text-sky-100"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Your daily dose of atmospheric insights!
            </motion.p>
          </header>

          <form onSubmit={handleSearch} className="flex gap-2 mb-8 items-center">
            <Input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Enter city name..."
              className="flex-grow bg-white/10 border-sky-300/50 placeholder-sky-200/70 text-white focus:ring-pink-500 focus:border-pink-500"
            />
            <Button type="submit" className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
              <Search size={20} className="mr-2" /> Search
            </Button>
          </form>

          {loading && (
            <div className="flex justify-center items-center h-64">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 border-4 border-t-pink-500 border-r-purple-500 border-b-sky-500 border-l-transparent rounded-full"
              ></motion.div>
            </div>
          )}

          {!loading && weatherData && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-white/5 backdrop-blur-md border-sky-300/30 shadow-2xl shadow-purple-500/30">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-3xl font-bold text-sky-100 flex items-center">
                        <MapPin size={28} className="mr-3 text-pink-400" /> {city}
                      </CardTitle>
                      <CardDescription className="text-sky-200/80 text-md">Current Weather Conditions</CardDescription>
                    </div>
                    <div className="text-right">
                      {getWeatherIcon(weatherData.current.condition, 64)}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-center md:text-left">
                    <motion.div 
                      className="flex flex-col items-center md:items-start"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                    >
                      <p className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-yellow-300 via-orange-400 to-red-500">
                        {weatherData.current.temp}°C
                      </p>
                      <p className="text-xl text-sky-200 capitalize">{weatherData.current.condition}</p>
                    </motion.div>
                    
                    <div className="col-span-1 md:col-span-2 grid grid-cols-2 gap-4 text-sky-200/90">
                      {[
                        { icon: <Thermometer size={20} className="text-orange-400" />, label: "Feels Like", value: `${weatherData.current.temp + (Math.random() > 0.5 ? 1 : -1)}°C` },
                        { icon: <Droplets size={20} className="text-blue-400" />, label: "Humidity", value: `${weatherData.current.humidity}%` },
                        { icon: <Wind size={20} className="text-teal-400" />, label: "Wind", value: `${weatherData.current.wind} km/h` },
                        { icon: <Sun size={20} className="text-yellow-400" />, label: "UV Index", value: "Moderate" },
                      ].map((item, index) => (
                        <motion.div 
                          key={item.label} 
                          className="flex items-center space-x-2 p-3 bg-white/5 rounded-lg"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                        >
                          {item.icon}
                          <div>
                            <p className="text-sm text-sky-300/70">{item.label}</p>
                            <p className="font-semibold">{item.value}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-xl font-semibold mb-4 text-sky-100">3-Day Forecast</h3>
                    <div className="grid grid-cols-3 gap-4">
                      {weatherData.forecast.map((dayForecast, index) => (
                        <motion.div
                          key={index}
                          className="bg-white/10 p-4 rounded-xl text-center shadow-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 + index * 0.15, duration: 0.5 }}
                        >
                          <p className="font-semibold text-lg text-sky-100">{dayForecast.day}</p>
                          <div className="my-2 text-pink-300">{getWeatherIcon(dayForecast.condition, 32)}</div>
                          <p className="text-2xl font-bold text-yellow-300">{dayForecast.temp}°C</p>
                          <p className="text-sm text-sky-200/80 capitalize">{dayForecast.condition}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
          
          {!loading && !weatherData && city && (
             <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mt-10"
            >
              <Card className="bg-red-500/20 border-red-500/50 p-8">
                <CardTitle className="text-2xl text-red-200 mb-2">Oops! City Not Found</CardTitle>
                <CardDescription className="text-red-300">
                  We couldn't find weather data for "{city}". Please check the spelling or try a different city.
                </CardDescription>
                <div className="mt-6">
                  <img  alt="Sad cloud illustration" className="mx-auto w-32 h-32 opacity-70" src="https://images.unsplash.com/photo-1631262091034-1bacc8612533" />
                </div>
              </Card>
            </motion.div>
          )}

          <footer className="text-center mt-12 py-4 border-t border-sky-300/20">
            <p className="text-sm text-sky-200/70">
              Weather data is mocked. For real-time data, an API integration is needed.
            </p>
            <p className="text-xs text-sky-300/50 mt-1">
              Powered by React, TailwindCSS, and Framer Motion. Design by Horizons AI. &copy; {new Date().getFullYear()}
            </p>
          </footer>
        </motion.div>
      );
    };

    export default WeatherPage;