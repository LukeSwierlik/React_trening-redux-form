import axios from 'axios';
import API from '../../api/api';
import { characters as actions } from "../actionsType/actionsType";

const startFetchCharacters = () => {
    return {
        type: actions.START_FETCH_CHARACTERS,
        loading: true
    };
};

const fetchCharacters = (payload) => {
    return {
        type: actions.FETCH_CHARACTERS,
        payload: {
            ...payload,
            loading: false
        }
    };
};

const errorFetchCharacters = (error) => {
    return {
        type: actions.ERROR_FETCH_CHARACTERS,
        error
    }
};

const searchFilter = (textFilter) => {
    return {
        type: actions.SEARCH_FILTER,
        textFilter
    }
};

export const fetchCharactersAction = () => (dispatch) => {
    dispatch(startFetchCharacters());

    axios
        .get(API.CHARACTERS)
        .then(({ data }) => {
            dispatch(fetchCharacters(data));
        })
        .catch((error) => {
            dispatch(errorFetchCharacters(error));
        });
};

export const searchFilterAction = (searchText) => (dispatch) => {
    dispatch(searchFilter(searchText));
};
