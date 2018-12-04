import { characters as actions } from "../actionsType/actionsType";
import {updateObject} from "../../utility/utility";

const INITIAL_STATE = {
    info: {},
    results: [],
    loading: false,
    error: '',
    textFilter: ''
};

const startFetchCharacters = (state, action) => {
    const { loading } = action;

    return updateObject(state, {
       loading
    });
};

const fetchCharacters = (state, action) => {
    const { info, results, loading } = action.payload;

    return updateObject(state, {
        info,
        results,
        loading
    });
};

const errorFetchCharacters = (state, action) => {

};


const searchFilter = (state, action) => {
    const { textFilter } = action;

    return updateObject(state, {
        textFilter
    });
};


const charactersReducer = (state = INITIAL_STATE, action = {}) => {
    const payload = {
        [actions.START_FETCH_CHARACTERS]: startFetchCharacters,
        [actions.FETCH_CHARACTERS]: fetchCharacters,
        [actions.ERROR_FETCH_CHARACTERS]: errorFetchCharacters,
        [actions.SEARCH_FILTER]: searchFilter
    };

    return (payload[action.type] || (() => state))(state, action);
};

export default charactersReducer;
