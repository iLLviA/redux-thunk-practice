import { Actions, actionCreator } from './hotels'
import { string } from 'prop-types';

export interface rootState {
    place: string
    location: {
        lat: number
        lng: number
    }
    address: string
    error: string
}

const init = ():rootState => {
    return {
        place: '',
        location: {
            lat: 0,
            lng: 0
        },
        address:'',
        error: ''
    }
}

export const HotelActionCreator = actionCreator


export const reducer = (state:rootState = init(),action: Actions) => {
    switch(action.type) {
        case 'SET_PLACE':
            return {
                ...state,
                place: action.payload.place
            }
        
        case 'SEARCH_PLACE':
            return {
                ...state,
                location: {
                    lat: action.payload.lat,
                    lng: action.payload.lng
                },
                address: action.payload.address
            }
        
        case 'ERROR_MASSAGE':
        return {
            ...state,
            error: action.payload.error
        }
        default: return state
    }
}

