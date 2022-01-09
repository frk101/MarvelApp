import {
  COMICS_LIST,
  COMICS_LIST_URL,
  COMICS_DETAIL,
  COMICS_DETAIL_URL,
  COMICS_OR_CHARACTER,
  COMICS_OR_CHARACTER_URL,
  COMICS_OR_CREATORS,
  COMICS_OR_CREATORS_URL,
} from "../types/comics";

import { apikey, hash } from "../../helpers/veriables";

export function getComicsList() {
  return {
    type: COMICS_LIST,
    payload: {
      request: {
        method: "GET",
        url: `${COMICS_LIST_URL}?ts=1&apikey=${apikey}&hash=${hash}`,
      },
    },
  };
}

export function getComicsDetail(comicsId) {
  return {
    type: COMICS_DETAIL,
    payload: {
      request: {
        method: "GET",
        url: `${COMICS_DETAIL_URL}${comicsId}?ts=1&apikey=${apikey}&hash=${hash}`,
      },
    },
  };
}

export function getComicsOrCharacter(comicsId) {
  return {
    type: COMICS_OR_CHARACTER,
    payload: {
      request: {
        method: "GET",
        url: `${COMICS_OR_CHARACTER_URL}${comicsId}/characters?ts=1&apikey=${apikey}&hash=${hash}`,
      },
    },
  };
}

export function getComicsOrCreators(comicsId) {
  return {
    type: COMICS_OR_CREATORS,
    payload: {
      request: {
        method: "GET",
        url: `${COMICS_OR_CREATORS_URL}${comicsId}/creators?ts=1&apikey=${apikey}&hash=${hash}`,
      },
    },
  };
}
