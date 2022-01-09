import {
  CHARACTER_LIST,
  CHARACTER_LIST_SUCCESS,
  CHARACTER_LIST_FAIL,
  CHARACTER_DETAIL,
  CHARACTER_DETAIL_SUCCESS,
  CHARACTER_DETAIL_FAIL,
  CHARACTER_OR_COMICS,
  CHARACTER_OR_COMICS_SUCCESS,
  CHARACTER_OR_COMICS_FAIL,
} from "../types/character";

const INITIAL_STATE = {
  getCharacterListLoading: false,
  getCharacterListResult: {},
  getCharacterListFail: false,
  getCharacterDetailLoading: false,
  getCharacterDetailResult: {},
  getCharacterDetailFail: false,
  getCharacterOrComicsLoading: false,
  getCharacterOrComicsResult: {},
  getCharacterOrComicsFail: false,
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHARACTER_LIST:
      return {
        ...state,
        getCharacterListLoading: true,
        getCharacterListResult: {},
        getCharacterListFail: false,
      };
    case CHARACTER_LIST_SUCCESS:
      return {
        ...state,
        getCharacterListLoading: false,
        getCharacterListResult: action.payload.data,
        getCharacterListFail: false,
      };
    case CHARACTER_LIST_FAIL:
      return {
        ...state,
        getCharacterListLoading: false,
        getCharacterListResult: {},
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
        getCharacterDetailResult: action.payload.data.data.results[0],
        getCharacterDetailFail: false,
      };
    case CHARACTER_DETAIL_FAIL:
      return {
        ...state,
        getCharacterDetailLoading: false,
        getCharacterDetailResult: {},
        getCharacterDetailFail: true,
      };

    case CHARACTER_OR_COMICS:
      return {
        ...state,
        getCharacterOrComicsLoading: true,
        getCharacterOrComicsResult: {},
        getCharacterOrComicsFail: false,
      };
    case CHARACTER_OR_COMICS_SUCCESS:
      return {
        ...state,
        getCharacterOrComicsLoading: false,
        getCharacterOrComicsResult: action.payload.data,
        getCharacterOrComicsFail: false,
      };
    case CHARACTER_OR_COMICS_FAIL:
      return {
        ...state,
        getCharacterOrComicsLoading: false,
        getCharacterOrComicsResult: {},
        getCharacterOrComicsFail: true,
      };

    default:
      return { ...state };
  }
};
