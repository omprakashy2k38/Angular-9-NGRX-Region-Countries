import { RegionState } from './country.state';
import { Region } from './../../models/region';
import * as countryAction from './country.action';

export const initialState: RegionState = {
    regions: [
        { name: 'Europe', expanded: false, countries: [] },
        { name: 'Asia', expanded: false, countries: [] }
    ]
};

export function countryReducer(state = initialState, action: countryAction.Actions): RegionState {
    let regionObj = null;
    switch (action.type) {
        case countryAction.SELECTREGION_COMPLETE:
            return Object.assign({}, state, {
                regions: state.regions.map((item: Region) => {
                    return item.name === action.region.name ? Object.assign({}, item, action.region ) : item;
                })
            });

        case countryAction.COLLAPSEREGION:
            regionObj = Object.assign({}, action.region);
            regionObj.expanded = false;
            return Object.assign({}, state, {
                regions: state.regions.map((item: Region) => {
                    return item.name === action.region.name ? Object.assign({}, item, regionObj ) : item;
                })
            });

        case countryAction.OPEN_COUNTRY_DETAILS:
            regionObj = JSON.parse(JSON.stringify(action.region));
            regionObj.countries[action.countryIndex].expanded = true;
            return Object.assign({}, state, {
                regions: state.regions.map((item: Region) => {
                    return item.name === action.region.name ? Object.assign({}, item, regionObj ) : item;
                })
            });

        case countryAction.HIDE_COUNTRY_DETAILS:
            regionObj = JSON.parse(JSON.stringify(action.region));
            regionObj.countries[action.countryIndex].expanded = false;
            return Object.assign({}, state, {
                regions: state.regions.map((item: Region) => {
                    return item.name === action.region.name ? Object.assign({}, item, regionObj ) : item;
                })
            });
    }
    return state;
}
