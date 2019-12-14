import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const myLogger = (store) => (next) => (action) => {
    console.log("Logged action", action);
    next(action);
}

import rootReducer from './store/reducers';
const store = createStore(rootReducer, applyMiddleware(thunk, myLogger));

//import "../css/app.scss";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={ Home }/>
                    <Route component = { NoMatch } />
                </Switch>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root"));
