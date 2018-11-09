import {Component, OnInit} from '@angular/core';
import '@angular/forms';
import {WeatherService} from '../weather.service';
import {WeatherItem} from '../weather-item/weather-item';
import {Subject} from 'rxjs';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/filter';

@Component({
    selector: 'app-weather-search',
    templateUrl: './weather-search.component.html',
    styleUrls: ['./weather-search.component.scss'],
})
export class WeatherSearchComponent implements OnInit {
    public location: string;
    private searchStream = new Subject<string>();
    data: any = {};

    constructor(private _weatherService: WeatherService) {
    }

    ngOnInit() {
        this.searchStream
            .debounceTime(300)
            .filter((input: string) => input.length > 2)
            .distinctUntilChanged()
            .switchMap((input: string) => this._weatherService.searchWeatherData(input))
            .subscribe(
                data => this.data = data
            );
    }

    onSubmit() {
        const weatherItem = new WeatherItem(this.data.name, this.data.weather[0].description, this.data.main.temp);
        this._weatherService.addWeatherItem(weatherItem);
    }

    onSearchLocation(cityName: string) {
        this.searchStream
            .next(cityName);
    }

    onClear() {
        this._weatherService.clearWeatherItems();
    }
}
