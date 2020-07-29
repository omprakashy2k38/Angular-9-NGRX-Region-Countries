import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { RegionState } from '../store/country.state';
import * as CountryActions from '../store/country.action';
import { Region } from './../../models/region';

@Component({
    selector: 'app-country-component',
    templateUrl: './country.component.html',
    styleUrls: ['./country.component.scss']
})

export class CountryComponent implements OnInit {

    public async: any;

    regionsState$: Observable<RegionState>;

    constructor(private store: Store<any>) {
        this.regionsState$ = this.store.select<RegionState>((state: any) => state.world);
    }

    ngOnInit() {
    }

    public getCountries(region: Region) {
        this.store.dispatch(new CountryActions.SelectRegionAction(region));
    }

    public collapse(region: Region) {
         this.store.dispatch(new CountryActions.CollapseRegionAction(region));
    }

    public getCountyDetails(region: Region, countryIndex: number) {
        this.store.dispatch(new CountryActions.OpenDetailsAction(region, countryIndex));
    }

    public hideCountyDetails(region: Region, countryIndex: number) {
        this.store.dispatch(new CountryActions.HideDetailsAction(region, countryIndex));
    }
}
