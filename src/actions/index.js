import $ from "jquery"
import md5 from 'crypto-js/md5'

const API_PRIVATE = 'b0223681fced28de0fe97e6b9cd091dd36a5b71d'
const API_PUBLIC = '298bab46381a6daaaee19aa5c8cafea5'
const BASE_URL = 'http://gateway.marvel.com'
const VERSION = 'v1'
const PREFIX = 'public'

const buildHash = (ts) => {
  let strConcat = ts + API_PRIVATE + API_PUBLIC
  let hash = md5(strConcat).toString()

  return hash
}

export const init = () => {
  return (dispatch) => {
    let ts = Date.now()
    let hash = buildHash(ts)

    let currentURL = 'characters'

    $.get({
      url: [BASE_URL, VERSION, PREFIX, currentURL].join('/'),
      data: {
        ts: ts,
        apikey: API_PUBLIC,
        hash: hash
      },
      success: (data) => {
        dispatch(charactersGet(data.data.results))
      },
      error: (data) => {
        dispatch(initError(data))
      }
    })
  }
}

export const CHARACTERS_GET = 'CHARACTERS_GET'
export const charactersGet = (characters) => {
  return {
    type: CHARACTERS_GET,
    charactersList: characters
  }
}

export const INIT_ERROR = 'INIT_ERROR'
export const initError = () => {
  return {
    type: INIT_ERROR
  }
}