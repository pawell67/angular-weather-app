import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {WeatherItem} from './weather-item/weather-item';

@Injectable()
export class WeatherService {
    WEATHER_ITEMS: WeatherItem[] = [];

    constructor(private _http: HttpClient) {

    }

    getWeatherItems() {
        return this.WEATHER_ITEMS;
    }

    addWeatherItem(weatherItem: WeatherItem) {
        this.WEATHER_ITEMS.push(weatherItem);
    }


    clearWeatherItems() {
        this.WEATHER_ITEMS.splice(0);
    }

    searchWeatherData(cityName: string): Observable<any> {
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&type=like&units=metric&APPID=d5bf238cd2565d4d7ea1e1483be99b68`;
        return this._http
            .get(url)
            .catch(error => {
                return error.message;
            });
    }
}
