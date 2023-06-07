import initialState from './initialState/index';
import reducer from './index';
import actionsType from './actions/actionsType';

describe('reducer', () => {
    test('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });

    test('should handle SET_START_DATE', () => {
        expect(
            reducer({}, {
                type: actionsType.SET_START_DATE,
                value: '9/19/2021',
            }),
        ).toEqual({
            startDate: '9/19/2021',
        });
    });

    test('should handle SET_END_DATE', () => {
        expect(
            reducer({}, {
                type: actionsType.SET_END_DATE,
                value: '3/9/2023',
            }),
        ).toEqual({
            endDate: '3/9/2023',
        });
    });

    test('should handle SET_SEARCHED_VALUE', () => {
        expect(
            reducer({}, {
                type: actionsType.SET_SEARCHED_VALUE,
                value: 'layo',
            }),
        ).toEqual({
            searchedValue: 'layo',
        });
    });
});
