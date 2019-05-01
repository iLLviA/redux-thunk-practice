import * as React from 'react'
import styled from 'styled-components';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore<>

const App: React.SFC = () => {
    return (
        <Provider>
        </Provider>
    )
}

export default App