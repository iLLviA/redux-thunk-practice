import { apiReducer } from './api'
import { placeReducer} from './place'
import { combineReducers } from 'redux'
import { RootActions, RootState } from '../Types'

export const RootReducers = combineReducers<RootState, RootActions>({
    api: apiReducer,
    place: placeReducer
})

