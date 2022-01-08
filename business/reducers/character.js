import {
  CHARACTER_LIST,
  CHARACTER_LIST_SUCCESS,
  CHARACTER_LIST_FAIL,
  CHARACTER_DETAIL,
  CHARACTER_DETAIL_SUCCESS,
  CHARACTER_DETAIL_FAIL,
} from "../types/character";

const INITIAL_STATE = {
  getCharacterListLoading: false,
  getCharacterListResult: [],
  getCharacterListFail: false,
  getCharacterDetailLoading: false,
  getCharacterDetailResult: {},
  getCharacterDetailFail: false,
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHARACTER_LIST:
      return {
        ...state,
        getCharacterListLoading: true,
        getCharacterListResult: [],
        getCharacterListFail: false,
      };
    case CHARACTER_LIST_SUCCESS:
      return {
        ...state,
        getCharacterListLoading: false,
        getCharacterListResult: action.payload.data.data.results,
        getCharacterListFail: false,
      };
    case CHARACTER_LIST_FAIL:
      return {
        ...state,
        getCharacterListLoading: false,
        getCharacterListResult: [],
        getCharacterListFail: true,
      };

    case CHARACTER_DETAIL:
      return {
        ...state,
        getCharacterDetailLoading: true,
        getCharacterDetailResult: {},
        getCharacterDetailFail: false,
      };
    case CHARACTER_DETAIL_SUCCESS:
      return {
        ...state,
        getCharacterDetailLoading: false,
        getCharacterDetailResult: action.payload.data.data.results,
        getCharacterDetailFail: false,
      };
    case CHARACTER_DETAIL_FAIL:
      return {
        ...state,
        getCharacterDetailLoading: false,
        getCharacterDetailResult: {},
        getCharacterDetailFail: true,
      };

    default:
      return { ...state };
  }
};
