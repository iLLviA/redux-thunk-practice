import * as React from 'react'
import styled from 'styled-components';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { RootActions, RootState, RootReducers } from '../modules'
import ReduxThunk, { ThunkMiddleware } from 'redux-thunk'
import Form from './Form'


const store = createStore<RootState,RootActions, {}, {}>(
    RootReducers,
    composeWithDevTools(applyMiddleware(ReduxThunk as ThunkMiddleware<RootState, RootActions>))
)

const App: React.SFC = () => {
    return (
        <Provider store = {store}>
            <Form />
        </Provider>
    )
}

export default App