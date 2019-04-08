import { Action } from 'redux'

interface SetPlaceActionPayload {
    place: string
}

interface SearchPlaceActionPayload {
    lat: number
    lng: number
    address: string
}
interface ErrorMassageActionPayload {
    error: string
} 

interface SetPlaceAction extends Action {
    type: 'SET_PLACE'
    payload: SetPlaceActionPayload
}

interface SearchPlaceAction extends Action {
    type: 'SEARCH_PLACE'
    payload: SearchPlaceActionPayload
}

interface ErrorMassageAction extends Action {
    type: 'ERROR_MASSAGE'
    payload: ErrorMassageActionPayload
}

const setPlace = (payload: SetPlaceActionPayload):SetPlaceAction => {
    return {
        type: 'SET_PLACE',
        payload
    }
}

const searchPlace = (payload:SearchPlaceActionPayload):SearchPlaceAction => {
    return {
        type: 'SEARCH_PLACE',
        payload
    }
}

const errorMassage = (payload:ErrorMassageActionPayload): ErrorMassageAction => {
    return {
        type: 'ERROR_MASSAGE',
        payload
    }
}


export type Actions
    = SetPlaceAction
    | SearchPlaceAction
    | ErrorMassageAction

export const actionCreator = {
    setPlace,
    searchPlace,
    errorMassage
}