import {Injectable} from '@angular/core';
import {WEATHER_ITEMS} from './weather.mock';

@Injectable()
export class WeatherService {

    getWeatherItems() {
        return WEATHER_ITEMS;
    }
}