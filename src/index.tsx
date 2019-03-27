import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { EnthusiasmAction } from './actions/actions'
import { enthusiasm } from './reducers/reducers';
import { IStoreState } from './types/types';

const store = createStore<IStoreState, EnthusiasmAction, any, any>(enthusiasm, {
    enthusiasmLevel: 5,
    languageName: 'People',
})

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
