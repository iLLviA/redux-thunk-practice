import { ApiActions, ApiState } from '../Types'

const init = ():ApiState => ({
    data: {},
    error: '',
    onFetch: false
})

const apiReducer = (state:ApiState = init(), action:ApiActions) => {
    switch(action.type) {
        case 'START_FETCH':
            return Object.assign({},state,{onFetch: true})
        
        case 'DONE_FETCH':
            return Object.assign({},state,
                 {
                   data: action.payload,
                   onFetch: false,
                   error: null
                 })
        case 'FAIL_FETCH':
             return Object.assign({}, state, { error: action.payload.message})
        default: 
             return state
    }
}

export default apiReducer