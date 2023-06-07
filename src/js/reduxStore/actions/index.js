import actionsType from './actionsType';

const updateStartDate = value => ({
    type: actionsType.SET_START_DATE,
    value,
});

const updateEndDate = value => ({
    type: actionsType.SET_END_DATE,
    value,
});

const updateSearchedValue = value => ({
    type: actionsType.SET_SEARCHED_VALUE,
    value,
});


export {
    updateStartDate, updateEndDate, updateSearchedValue,
};
