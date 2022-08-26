import React from "react";
import ReactDOM from "react-dom/client";
import { createStore, applyMiddleware } from "redux";
import "./index.css";
import thunk from "redux-thunk";
import App from "./components/App";
import rootReducer from "./reducers";
//
// const logger=function ({dispatch,getState}){
//           return function(next){
//             return function (action){
//               //middleware code
//               console.log("ACTION_TYPE =",action.type)
//              next(action)
//             }
//           }
// }

const logger =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    // middleware code
    if (typeof action !== "function") {
      console.log("ACTION_TYPE =", action.type);
    }

    next(action);
  };

// const thunk =
//   ({ dispatch, getState }) =>
//   (next) =>
//   (action) => {
//     // middleware code
//     if (typeof action === 'function'){
//       action(dispatch);
//       return;
//     }
//     next(action);
//   };
const store = createStore(rootReducer, applyMiddleware(logger, thunk));
console.log("before", store.getState());
// store.dispatch({
//   type:'ADD_MOVIES',
//   movies:[{name:"Superman"}]
// // });

// console.log("after", store.getState());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);
