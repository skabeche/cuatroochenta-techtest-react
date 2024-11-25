class WeatherRepository {
  constructor(apiAdapter) {
    this.apiAdapter = apiAdapter;
  }

  async getWeatherByCity(appKey, city, language, units) {
    return await this.apiAdapter.get(`?q=${city}&units=${units}&appid=${appKey}&lang=${language}`);
  }
}

export default WeatherRepository;
