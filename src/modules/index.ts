import { combineReducers } from 'redux'
import { addTodoAction, toggleTodoAction, setVisibilityFilterAction, FilterType , showAll} from '../actions/index'

//todos Reducer

export interface todosState {
    todos: {
        id: number,
        text: string,
        completed: boolean
    }[]
}

const initTodo = ():todosState => {
    return {
        todos: []
    }
}

type Actions 
    = addTodoAction
    | toggleTodoAction
    | setVisibilityFilterAction 

export const todos = (state: todosState = initTodo(), action: Actions) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                todos:[
                    ...state.todos,
                    {
                        id: action.payload.id,
                        text: action.payload.text,
                        completed: action.payload.completed
                    }
                ]
            }
        case 'TOGGLE_TODO':
            return {
                todos: state.todos.map((e) => {
                    return e.id === action.payload.id 
                        ? {
                            ...e,
                            completed: !e.completed
                        } : e
                })
            }
        default:
            return state;
    }
}

// setvisibility Reducer
interface filterState {
    visibilityFilter: FilterType
}

const initFilter = ():filterState => {
    return {
        visibilityFilter: showAll()
    }
}

export const setVisibilityFilter = (state: filterState = initFilter(), action:)

export const rootReducer = combineReducers({})