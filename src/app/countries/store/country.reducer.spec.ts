import * as countryReduce from './country.reducer';
import * as countryAction from './country.action';
import { Region } from '../../models/region';

describe('CountryReducer', () => {
    describe('no action called', () => {
        it('should return the default/initial state', () => {
            const { initialState } = countryReduce;
            const action = new countryAction.Default();
            const state = countryReduce.countryReducer(undefined, action);
            expect(state).toBe(initialState);
        });
    });

    describe('valid action', () => {
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
        it('should return also default/initial state', () => {
            const { initialState } = countryReduce;
            const action = new countryAction.SelectRegionAction(payload);
            const state = countryReduce.countryReducer(initialState, action);
            expect(state).toBe(initialState);
        });

        it('should set the name state', () => {
            const { initialState } = countryReduce;
            const action = new countryAction.SelectRegionCompleteAction(payload);
            const state = countryReduce.countryReducer(initialState, action);
            expect(state.regions[0].name).toEqual(initialState.regions[0].name);
        });

        it('should collapse region', () => {
            const { initialState } = countryReduce;
            payload.expanded = true;
            const action = new countryAction.CollapseRegionAction(payload);
            const state = countryReduce.countryReducer(initialState, action);
            expect(state.regions[0].expanded).toEqual(false);
        });
    });
});
