import {
  COMICS_LIST,
  COMICS_LIST_FAIL,
  COMICS_LIST_SUCCESS,
  COMICS_DETAIL,
  COMICS_DETAIL_SUCCESS,
  COMICS_DETAIL_FAIL,
  COMICS_OR_CHARACTER,
  COMICS_OR_CHARACTER_SUCCESS,
  COMICS_OR_CHARACTER_FAIL,
  COMICS_OR_CREATORS,
  COMICS_OR_CREATORS_FAIL,
  COMICS_OR_CREATORS_SUCCESS
} from "../types/comics";

const INITIAL_STATE = {
  getComicsListLoading: false,
  getComicsListResult: {},
  getComicsListFail: false,
  getComicsDetailListLoading: false,
  getComicsDetailListResult: {},
  getComicsDetailListFail: false,
  getComicsOrCharacterLoading: false,
  getComicsOrCharacterResult: {},
  getComicsOrCharacterFail: false,
  getComicsOrCreatorsLoading: false,
  getComicsOrCreatorsResult: {},
  getComicsOrCreatorsFail: false,
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case COMICS_LIST:
      return {
        ...state,
        getComicsListLoading: true,
        getComicsListResult: {},
        getComicsListFail: false,
      };
    case COMICS_LIST_SUCCESS:
      return {
        ...state,
        getComicsListLoading: false,
        getComicsListResult: action.payload.data,
        getComicsListFail: false,
      };
    case COMICS_LIST_FAIL:
      return {
        ...state,
        getComicsListLoading: false,
        getComicsListResult: {},
        getComicsListFail: true,
      };
    case COMICS_DETAIL:
      return {
        ...state,
        getComicsDetailListLoading: true,
        getComicsDetailListResult: {},
        getComicsDetailListFail: false,
      };
    case COMICS_DETAIL_SUCCESS:
      return {
        ...state,
        getComicsDetailListLoading: false,
        getComicsDetailListResult: action.payload.data,
        getComicsDetailListFail: false,
      };
    case COMICS_DETAIL_FAIL:
      return {
        ...state,
        getComicsDetailListLoading: false,
        getComicsDetailListResult: {},
        getComicsDetailListFail: true,
      };

    case COMICS_OR_CHARACTER:
      return {
        ...state,
        getComicsOrCharacterLoading: true,
        getComicsOrCharacterResult: {},
        getComicsOrCharacterFail: false,
      };
    case COMICS_OR_CHARACTER_SUCCESS:
      return {
        ...state,
        getComicsOrCharacterLoading: false,
        getComicsOrCharacterResult: action.payload.data,
        getComicsOrCharacterFail: false,
      };
    case COMICS_OR_CHARACTER_FAIL:
      return {
        ...state,
        getComicsOrCharacterLoading: false,
        getComicsOrCharacterResult: {},
        getComicsOrCharacterFail: true,
      };

    case COMICS_OR_CREATORS:
      return {
        ...state,
        getComicsOrCreatorsLoading: true,
        getComicsOrCreatorsResult: {},
        getComicsOrCreatorsFail: false,
      };
    case COMICS_OR_CREATORS_SUCCESS:
      return {
        ...state,
        getComicsOrCreatorsLoading: false,
        getComicsOrCreatorsResult: action.payload.data,
        getComicsOrCreatorsFail: false,
      };
    case COMICS_OR_CREATORS_FAIL:
      return {
        ...state,
        getComicsOrCreatorsLoading: false,
        getComicsOrCreatorsResult: {},
        getComicsOrCreatorsFail: true,
      };
    default:
      return { ...state };
  }
};
