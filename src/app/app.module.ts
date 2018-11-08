import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {WeatherItemComponent} from './weather/weather-item/weather-item.component';
import {WeatherListComponent} from './weather/weather-list/weather-list.component';
import {WeatherService} from './weather/weather.service';

@NgModule({
    declarations: [
        AppComponent,
        WeatherItemComponent,
        WeatherListComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [WeatherService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
