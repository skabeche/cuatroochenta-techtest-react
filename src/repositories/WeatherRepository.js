import BaseRepository from "./BaseRepository";

class WeatherRepository extends BaseRepository {
  constructor(apiAdapter) {
    super(apiAdapter);
  }

  async getWeatherByCity(appKey, city, language, units) {
    return await this.apiAdapter.get(`?q=${city}&units=${units}&appid=${appKey}&lang=${language}`);
  }
}

export default WeatherRepository;
