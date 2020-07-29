import { Action } from '@ngrx/store';
import { Region } from './../../models/region';

export const SELECTREGION = '[countries] Select Region';
export const SELECTREGION_COMPLETE = '[countries] Select Region Complete';
export const COLLAPSEREGION = '[countries] COLLAPSE Region';
export const OPEN_COUNTRY_DETAILS = '[countries] OPEN_COUNTRY_DETAILS';
export const HIDE_COUNTRY_DETAILS = '[countries] HIDE_COUNTRY_DETAILS';
export const UNDEFINED = 'UNDEFINED';


export class Default implements Action {
    readonly type = UNDEFINED;
}

export class SelectRegionAction implements Action {
    readonly type = SELECTREGION;

    constructor(public region: Region) { }
}

export class SelectRegionCompleteAction implements Action {
    readonly type = SELECTREGION_COMPLETE;

    constructor(public region: Region) { }
}

export class CollapseRegionAction implements Action {
    readonly type = COLLAPSEREGION;

    constructor(public region: Region) { }
}

export class OpenDetailsAction implements Action {
    readonly type = OPEN_COUNTRY_DETAILS;

    constructor(public region: Region, public countryIndex) { }
}

export class HideDetailsAction implements Action {
    readonly type = HIDE_COUNTRY_DETAILS;

    constructor(public region: Region, public countryIndex) { }
}

export type Actions
    = SelectRegionAction
    | SelectRegionCompleteAction
    | CollapseRegionAction
    | OpenDetailsAction
    | HideDetailsAction
    | Default;
