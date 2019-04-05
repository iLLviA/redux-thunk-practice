import { Action } from 'redux'

interface SetPlaceActionPayload {
    place: string
}

interface SetPlaceAction extends Action {
    type: 'SET_PLACE'
    payload: SetPlaceActionPayload
}

const setPlace = (payload: SetPlaceActionPayload):SetPlaceAction => {
    return {
        type: 'SET_PLACE',
        payload
    }
}

export type Actions
    = SetPlaceAction

export const actionCreator = {
    setPlace
}