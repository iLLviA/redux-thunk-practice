import { ApiActions,ApiState } from './api'
export { ApiActions,ApiState, FailureFetchActionPayload, DoneFetchActionPayload} from './api' 

export type RootActions 
    = ApiActions


export type RootState = {
    api: ApiState
}