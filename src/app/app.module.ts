import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CountryModule } from './countries/country.module';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { SharedModule } from './shared/shared.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      SharedModule,
      CoreModule.forRoot(),
      CountryModule,
      StoreDevtoolsModule.instrument({ maxAge: 25 }),
      StoreModule.forRoot({}),
      EffectsModule.forRoot([])
  ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
