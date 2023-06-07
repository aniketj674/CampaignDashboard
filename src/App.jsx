import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './js/reduxStore';
import Dashboard from 'components';

function App() {
    const store = createStore(rootReducer);

    return (
        <Provider store={store}>
            <Dashboard />
        </Provider>
    );
}

export default App;