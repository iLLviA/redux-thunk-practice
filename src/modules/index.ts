import { combineReducers } from 'redux';
import * as Todos from './todos/'
import * as VisibilityFilter from './visibilityFilter';
import * as Hotel from './hotels'

export type RootState = {
    todos: Todos.State;
    visibilityFilter: VisibilityFilter.State;
    hotel: Hotel.rootState
};

export const rootReducer = combineReducers({
    todos: Todos.reducer,
    visibilityFilter: VisibilityFilter.reducer,
    hotel: Hotel.reducer
});

export const actionCreator = {
    todos: Todos.actionCreator,
    visibilityFilter: VisibilityFilter.actionCreator,
    hotel: Hotel.HotelActionCreator
};