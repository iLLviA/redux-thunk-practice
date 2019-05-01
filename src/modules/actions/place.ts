import { Action, Dispatch, ActionCreator } from 'redux'
import { RootActions, RootState, SetLocationActionPayload, SetPlaceActionPayload } from '../Types'
import { ThunkAction } from 'redux-thunk'
import { geocode } from '../../Domain/Geocoder'
import console = require('console');

export const setPlace:ActionCreator<RootActions>  = (payload:SetPlaceActionPayload):RootActions => ({
    type: 'SET_PLACE',
    payload
})

export const setLocation: ActionCreator<RootActions> = (payload: SetLocationActionPayload) => ({
    type: 'SET_LOCATION',
    payload
})


export const getLocation = ():ThunkAction<
    void,
    RootState,
    undefined,
    RootActions
> => async(dispatch:Dispatch<Action>,getState) => {
    try {
        const data = await geocode(getState().place.place)
        console.log(data)
        // dispatch(setPlace())
    }catch(e){
        console.log("通信に問題が発生しました。")
    }
}