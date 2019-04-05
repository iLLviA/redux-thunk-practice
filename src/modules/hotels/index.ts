import { Actions, actionCreator } from './hotels'

interface rootState {
    place: string
}

const init = ():rootState => {
    return {
        place: ''
    }
}

export const HotelActionCreator = actionCreator


export const reducer = (state:rootState = init(),action: Actions) => {
    switch(action.type) {
        case 'SET_PLACE':
            return {
                place: action.payload.place
            }

        default: return state
    }
}

