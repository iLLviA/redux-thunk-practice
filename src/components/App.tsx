import * as React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { RootActions, RootState, RootReducers } from '../modules'
import ReduxThunk, { ThunkMiddleware } from 'redux-thunk'
import HotelSearch from '../pages/HotelSearch'
import GlobalStyle from '../Basestyle'

const store = createStore<RootState,RootActions, {}, {}>(
    RootReducers,
    composeWithDevTools(applyMiddleware(ReduxThunk as ThunkMiddleware<RootState, RootActions>))
)

const App: React.SFC = () => {
    return (
        <Provider store = {store}>
            <GlobalStyle />
            <HotelSearch />
        </Provider>
    )
}

export default App