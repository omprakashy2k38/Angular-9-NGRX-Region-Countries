import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { CountryService } from './services/country.service';

@NgModule({
    imports: [
        CommonModule
    ]
})

export class CoreModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: [
                CountryService
            ]
        };
    }
}
