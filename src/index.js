import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './store/reducers';
import thunk from 'redux-thunk';
import { fetchMemes } from './store/actions';

const store = createStore(rootReducer, applyMiddleware(thunk));
store.subscribe(() => console.log('store', store.getState()));
store.dispatch(fetchMemes());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
