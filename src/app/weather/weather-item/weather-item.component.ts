import {Component, OnInit, Input} from '@angular/core';
import {WeatherItem} from './weather-item';

@Component({
    selector: 'app-weather-item',
    templateUrl: './weather-item.component.html',
    styleUrls: ['./weather-item.component.scss']
})
export class WeatherItemComponent {
    @Input('weatherItem')
    weatherItem: WeatherItem;
}

