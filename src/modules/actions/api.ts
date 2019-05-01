import { Action, Dispatch, ActionCreator } from 'redux'
import { DoneFetchActionPayload,FailureFetchActionPayload, RootActions, RootState } from '../Types'
import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import axios from 'axios'

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
        
        
    }catch(e){
        dispatch(failureFetch({message:e.message}))
    }

}
