import React from 'react';
import ReactDom from 'react-dom';
import { createStore, combineReducers } from 'redux';
import uuid from 'uuid/v4';

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";

import App from './components/App';

const categoriesReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD_CATEGORY':
            console.log('ADD_CATEGORY');
            console.log('action ', action);
            action.payload.id = uuid();
            const newState = [...state, action.payload.id];
            return newState;
        default:
            return state;
    }
};

const store = createStore(combineReducers({ categories: categoriesReducer }));

ReactDom.render(<App />, document.getElementById('root'));