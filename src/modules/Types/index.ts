import { ApiActions,ApiState } from './api'
import { PlaceState, PlaceAction } from './place'
export { ApiActions,ApiState, FailureFetchActionPayload, DoneFetchActionPayload} from './api' 
export { PlaceAction, PlaceState, SetLocationActionPayload, SetPlaceActionPayload} from './place'


export type RootActions 
    = ApiActions
    | PlaceAction


export type RootState = {
    api: ApiState,
    place: PlaceState
}