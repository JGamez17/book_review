import React from "react";
import ReactDOM from "react-Ddom";
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider } from "react-redux";
import thunk from "react-redux"



const store = createStore(
    rootReducer, composeEnhancers(applyMiddleware(thunk, logger))
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const rootReducer = combineReducers({
//     books: bookReducer,
// });
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
)


export default store;