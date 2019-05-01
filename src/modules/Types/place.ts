import { Action } from 'redux'

export type SetPlaceActionPayload = {
    place: string
}

export interface SetPlaceAction extends Action {
    type: 'SET_PLACE'
    payload: SetPlaceActionPayload
}

export type SetLocationActionPayload = {
    location: {
        lat: number
        lng: number
    }
}

interface SetLocationAction extends Action {
    type: 'SET_LOCATION'
    payload: SetLocationActionPayload
}

export type FormAction 
    = SetPlaceAction
    | SetLocationAction

export type FormState = {
    location: {
        lat: number
        lng: number
    },
    place: string
}


