import {
    updateStartDate, updateEndDate, updateSearchedValue
} from './index';
import actionsType from './actionsType';

describe('actions', () => {

    test('should create an action to update a start date', () => {
        const expectedAction = {
            type: actionsType.SET_START_DATE,
            value: '9/19/2021',
        };
        expect(updateStartDate('9/19/2021')).toEqual(expectedAction);
    });

    test('should create an action to update a end date', () => {
        const expectedAction = {
            type: actionsType.SET_END_DATE,
            value: '3/9/2023',
        };
        expect(updateEndDate('3/9/2023')).toEqual(expectedAction);
    });

    test('should create an action to update a search value', () => {
        const expectedAction = {
            type: actionsType.SET_SEARCHED_VALUE,
            value: 'layo',
        };
        expect(updateSearchedValue('layo')).toEqual(expectedAction);
    });
});
