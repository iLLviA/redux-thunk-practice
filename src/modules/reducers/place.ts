import { PlaceAction, PlaceState } from '../Types'

const init = ():PlaceState => {
    return {
        location: {
            lat:0,
            lng:0
        },
        place: '',
        address: ''
    }
}


export const placeReducer = (state:PlaceState = init() , action: PlaceAction) => {
    switch(action.type) {
        case 'SET_PLACE':
            return {
                ...state,
                place: action.payload.place
            }
        case 'SET_LOCATION':
            return {
                ...state,
                location: {
                    lat: action.payload.location.lat,
                    lng: action.payload.location.lng
                },
                address: action.payload.address
            }
        default: 
            return state
    }
}

