import { Action } from 'redux'


export interface StartFetchAction extends Action {
    type: 'START_FETCH'
}

export type DoneFetchActionPayload = {
    [key:string]: string
}

export interface DoneFetchAction extends Action{
    type: 'DONE_FETCH'
    payload: DoneFetchActionPayload
}

export type FailureFetchActionPayload = {
    message: string
}

export interface FailureFetchAction extends Action{
    type: 'FAIL_FETCH'
    payload: FailureFetchActionPayload
}

export type ApiActions 
        = StartFetchAction
        | DoneFetchAction
        | FailureFetchAction 


 export type ApiState = {
     data: {
         [key:string]:string
     },
     error?: string,
     onFetch: boolean
 }       