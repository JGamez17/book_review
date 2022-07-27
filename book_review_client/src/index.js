import React from 'react';
import ReactDOM from "react-dom/client";
import { createStore, applyMiddleware } from 'redux'
import { Provider } from "react-redux";
import { rootReducer } from './reducers/rootReducer'
import thunk from "redux-thunk"
import { composeWithDevTools } from 'redux-devtools-extension'
import App from './components/App'



const store = createStore(
    rootReducer, composeWithDevTools(applyMiddleware(thunk))
);

// ReactDOM.render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
//     document.getElementById('root')
// );

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Provider store={store}>
        <App />
    </Provider>
)


export default store;