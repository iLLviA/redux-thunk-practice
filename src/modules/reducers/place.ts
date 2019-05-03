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


const placeReducer = (state:PlaceState = init() , action: PlaceAction) => {
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
                }
            }
        default: 
            return state
    }
}

export default placeReducer