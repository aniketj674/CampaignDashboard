import actionsType from './actions/actionsType';
import initialState from './initialState';

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
    case actionsType.SET_START_DATE:
        return { ...state, startDate: action.value };
    case actionsType.SET_END_DATE:
        return { ...state, endDate: action.value };
    case actionsType.SET_SEARCHED_VALUE:
        return { ...state, searchedValue: action.value };
    default:
        return state;
    }
};

export default rootReducer;
