import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import registerServiceWorker from './registerServiceWorker'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers/Reducer'

const store = createStore(reducer)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root') as HTMLElement
)
registerServiceWorker()
