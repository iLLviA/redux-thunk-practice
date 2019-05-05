import * as React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { RootActions, RootState, RootReducers } from '../modules'
import ReduxThunk, { ThunkMiddleware } from 'redux-thunk'
import Form from './Form'
import HotelsArea from './HotelsArea'
import Card from './module/Card'
import GlobalStyle from '../Basestyle'

const store = createStore<RootState,RootActions, {}, {}>(
    RootReducers,
    composeWithDevTools(applyMiddleware(ReduxThunk as ThunkMiddleware<RootState, RootActions>))
)

const App: React.SFC = () => {
    return (
        <Provider store = {store}>
            <GlobalStyle />
            <Form />
            <HotelsArea />
            <Card />
        </Provider>
    )
}

export default App