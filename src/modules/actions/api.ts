import { Action, Dispatch, ActionCreator } from 'redux'
import { DoneFetchActionPayload,FailureFetchActionPayload, RootActions, RootState } from '../Types'
import { ThunkAction, ThunkDispatch } from 'redux-thunk'
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

export const getData = ():ThunkAction<
    void,
    RootState,
    undefined,
    RootActions
> => async (dispatch:Dispatch<Action>,getState) => {
    dispatch(startFetch())
    try {
        const location = getState().place.location
        const data = SearchHotelByLocation(location)
        console.log(data)
        dispatch(doneFetch({data}))
        
    }catch(e){
        dispatch(failureFetch({message:e.message}))
    }

}
