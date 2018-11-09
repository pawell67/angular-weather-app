import {Component, OnInit} from '@angular/core';
import {Profile} from '../profile/profile';
import {ProfileService} from '../profile/profile.service';
import {WeatherService} from '../weather/weather.service';
import {WeatherItem} from '../weather/weather-item/weather-item';
import 'rxjs/add/operator/retry';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
    providers: [ProfileService]
})
export class SidebarComponent implements OnInit {
    profiles: Profile[];


    constructor(private _profileService: ProfileService, private _weatherService: WeatherService) {
    }

    ngOnInit() {
        this.profiles = this._profileService.getProfiles();
    }

    onProfileSave() {
        const cities = this._weatherService.getWeatherItems().map(function (element: WeatherItem) {
            return element.cityName;
        });
        this._profileService.saveNewProfile(cities);
    }

    onProfileLoad(profile: Profile) {
        this._weatherService.clearWeatherItems();
        for (let i = 0; i < profile.cities.length; i++) {
            this._weatherService.searchWeatherData(profile.cities[i])
                .retry()
                .subscribe(
                    data => {
                        const weatherItem = new WeatherItem(data.name, data.weather[0].description, data.main.temp);
                        this._weatherService.addWeatherItem(weatherItem);
                    }
                )
            ;
        }
    }

    onProfileDelete(event: Event, profile: Profile) {
        event.stopPropagation();
        this._profileService.deleteProfile(profile);
    }
}
