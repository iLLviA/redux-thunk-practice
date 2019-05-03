import { Action, Dispatch, ActionCreator } from 'redux'
import { 
    RootActions,
    RootState,
    SetLocationActionPayload, 
    SetPlaceActionPayload,
    DoneFetchActionPayload,
    FailureFetchActionPayload
} from '../Types'
import { ThunkAction } from 'redux-thunk'
import { geocode } from '../../Domain/Geocoder'
import { SearchHotelByLocation } from '../../Domain/HotelRepository'


export const startFetch:ActionCreator<RootActions> = ():RootActions => ({
    type: 'START_FETCH'
})

export const failureFetch:ActionCreator<RootActions> = (payload: FailureFetchActionPayload):RootActions => ({
    type: 'FAIL_FETCH',
    payload
})

export const doneFetch:ActionCreator<RootActions> = (payload: DoneFetchActionPayload):RootActions => ({
    type: 'DONE_FETCH',
    payload
})


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
        const {address,location,status} = await geocode(getState().place.place)
        console.log(address)
        switch(status){
            case 'OK': {
                dispatch(setLocation({
                    address,
                    location: {
                        lat: location.lat,
                        lng: location.lng
                    }
                }))
                dispatch(startFetch())
                const data = await SearchHotelByLocation({location})
                dispatch(doneFetch(data))
                break;
            }
            case 'ZERO_RESULTS':{
                dispatch(failureFetch({message:"結果が見つかりませんでした"}))
                break;
            }
            default: 
                dispatch(failureFetch({message:"エラーが発生しました"}))
        }
        
    }catch(e){
        console.log("通信に問題が発生しました。")
    }
}