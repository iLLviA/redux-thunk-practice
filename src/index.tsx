import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import Hello from './componetns/Practice'
import { createStore } from 'redux'

import App from './componetns/App'
import { rootReducer } from './modules'
import { Provider }  from 'react-redux'

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#app')
)

