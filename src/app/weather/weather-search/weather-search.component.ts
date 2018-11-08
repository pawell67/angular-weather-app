import {Component, OnInit} from '@angular/core';
import '@angular/forms';
import {WeatherService} from '../weather.service';
import {WeatherItem} from '../weather-item/weather-item';

@Component({
    selector: 'app-weather-search',
    templateUrl: './weather-search.component.html',
    styleUrls: ['./weather-search.component.scss'],
})
export class WeatherSearchComponent implements OnInit {
    location: string;

    constructor(private _weatherService: WeatherService) {
    }

    ngOnInit() {
    }

    onSubmit(form) {
        this._weatherService.searchWeatherData(form.value.location)
            .subscribe(
                data => {
                    const weatherItem = new WeatherItem(data.name, data.weather[0].description, data.main.temp);
                    this._weatherService.addWeatherItem(weatherItem);
                }
            );
    }

}
