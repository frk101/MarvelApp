import {
  CHARACTER_LIST,
  CHARACTER_LIST_URL,
  CHARACTER_DETAIL,
  CHARACTER_DETAIL_URL,
  CHARACTER_OR_COMICS,
  CHARACTER_OR_COMICS_URL
} from "../types/character";

import { apikey, hash } from "../../helpers/veriables";

export function getCharacterList() {
  return {
    type: CHARACTER_LIST,
    payload: {
      request: {
        method: "GET",
        url: `${CHARACTER_LIST_URL}?ts=1&apikey=${apikey}&hash=${hash}`,
      },
    },
  };
}

export function getCharacterDetail(chacterId) {
  return {
    type: CHARACTER_DETAIL,
    payload: {
      request: {
        method: "GET",
        url: `${CHARACTER_DETAIL_URL}${chacterId}?ts=1&apikey=${apikey}&hash=${hash}`,
      },
    },
  };
}


export function getCharacterOrComics(chacterId) {
  return {
    type: CHARACTER_OR_COMICS,
    payload: {
      request: {
        method: "GET",
        url: `${CHARACTER_OR_COMICS_URL}${chacterId}/comics?ts=1&apikey=${apikey}&hash=${hash}`,
      },
    },
  };
}

