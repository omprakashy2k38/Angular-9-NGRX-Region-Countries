import {
    SELECTREGION_COMPLETE,
    SelectRegionCompleteAction,
    SELECTREGION,
    SelectRegionAction,
    HideDetailsAction,
    HIDE_COUNTRY_DETAILS,
    OPEN_COUNTRY_DETAILS,
    OpenDetailsAction,
    COLLAPSEREGION,
    CollapseRegionAction
} from './country.action';
import { Region } from 'src/app/models/region';

describe('CountryAction', () => {
    const payload: Region =
    {
        name: 'a',
        expanded: false,
        countries: [
            {
                name: 'c1',
                capital: 'cap1',
                population: 10,
                currencies: [],
                flag: '',
                expanded: false,
            },
            {
                name: 'c2',
                capital: 'cap2',
                population: 30,
                currencies: [],
                flag: '',
                expanded: false,
            }
        ],
    };

    it('should create a select region action', () => {
        const action = new SelectRegionAction(payload);
        expect(action.type).toEqual(SELECTREGION);
    });

    it('should create a select region complete action', () => {
        const action = new SelectRegionCompleteAction(payload);
        expect(action.type).toEqual(SELECTREGION_COMPLETE);
    });

    it('should create a collapse region action', () => {
        const action = new CollapseRegionAction(payload);
        expect(action.type).toEqual(COLLAPSEREGION);
    });

    it('should create a open details action', () => {
        const action = new OpenDetailsAction(payload, 1);
        expect(action.type).toEqual(OPEN_COUNTRY_DETAILS);
    });

    it('should create a hide details action', () => {
        const action = new HideDetailsAction(payload, 1);
        expect(action.type).toEqual(HIDE_COUNTRY_DETAILS);
    });
});
