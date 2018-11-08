import {Injectable} from '@angular/core';
import {WEATHER_ITEMS} from './weather.mock';
import {Observable, throwError} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {WeatherItem} from './weather-item/weather-item';

@Injectable()
export class WeatherService {
    constructor(private _http: HttpClient) {

    }

    getWeatherItems() {
        return WEATHER_ITEMS;
    }

    addWeatherItem(weatherItem: WeatherItem) {
        WEATHER_ITEMS.push(weatherItem);
    }

    searchWeatherData(cityName: string): Observable<any> {
        return this._http
            .get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=d5bf238cd2565d4d7ea1e1483be99b68&type=like&units=metric`)
            .catch(error => {
                console.log(error);
                return error;
            });
    }
}
