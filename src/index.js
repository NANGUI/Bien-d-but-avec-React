import React from 'react';
import ReactDom from 'react-dom';
import { createStore, combineReducers } from 'redux';
import uuid from 'uuid/v4';
import { Provider } from 'react-redux';

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";

import App from './components/App';

const categoriesReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD_CATEGORY':
            console.log('ADD_CATEGORY');
            console.log('action ', action);
            action.payload.id = uuid();
            const newState = [...state, action.payload];
            return newState;
        case 'EDIT_CATEGORY':
            console.log('EDIT_CATEGORY');
            const categoryId = action.payload.id;
            return state.map(category => {
                if(category.id !== categoryId) {
                    return category;
                }
                return action.payload;
            });
        default:
            return state;
    }
};

const store = createStore(combineReducers({ categories: categoriesReducer }), 
                window.__REDUX_DEVTOOLS_EXTENSION__ && 
                window.__REDUX_DEVTOOLS_EXTENSION__());

window.store = store;

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);