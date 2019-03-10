import { Action, compose } from 'redux'

enum ActionType {
    ADD_TODO = 'ADD_TODO',
    SET_VISIBILITY = 'SET_VISIBILITY',
    TOGGLE_TODO = 'TOGGLE_TODO',
}

let nextTodoId = 0;

export interface addTodoAction extends Action {
    type: ActionType.ADD_TODO,
    payload: {
        id: number,
        text: string,
        completed: boolean
    }
}

export const addTodo = (text:string): addTodoAction => ({
    type: ActionType.ADD_TODO,
    payload: {
        id: nextTodoId++,
        text,
        completed: false
    }
})

export interface setVisibilityFilterAction extends Action {
    type: ActionType.SET_VISIBILITY,
    payload: {
        filter: string
    }
}

export const setVisibilityFilter = (filter: string): setVisibilityFilterAction => ({
    type: ActionType.SET_VISIBILITY,
    payload: {
        filter
    }
})

export interface toggleTodoAction extends Action {
    type: ActionType.TOGGLE_TODO,
    payload: {
        id: number
    }
}

export const toggleTodo = (id: number): toggleTodoAction => ({
    type: ActionType.TOGGLE_TODO,
    payload: {
        id
    }
})


// setVisibilityFilter

type ShowAll = {
    type: 'SHOW_ALL'
}

type ShowCompleted = {
    type: 'SHOW_COMPLETED'
}
type ShowActive = {
    type: 'SHOW_ACTIVE'
}

export type FilterType 
    = ShowAll
    | ShowCompleted
    | ShowActive;

export const showAll = (): FilterType => {
    return {
        type: 'SHOW_ALL'
    }
}
export const showCompleted  = (): FilterType => {
    return {
        type: 'SHOW_COMPLETED'
    }
}
export const showActive = (): FilterType => {
    return {
        type: 'SHOW_ACTIVE'
    }
}

