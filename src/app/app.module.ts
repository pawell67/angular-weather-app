import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {WeatherItemComponent} from './weather/weather-item/weather-item.component';
import {WeatherListComponent} from './weather/weather-list/weather-list.component';
import {WeatherService} from './weather/weather.service';
import {WeatherSearchComponent} from './weather/weather-search/weather-search.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        WeatherItemComponent,
        WeatherListComponent,
        WeatherSearchComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [WeatherService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
