import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';
import countReducer from './reducers/count_reducer';
import { Provider } from 'react-redux';

// const incrementAction=(count)=>{
//   let new_count=count+1;
//   return {
//     type:'INCREMENT',
//     payload:new_count
//   }
// }

// const decrementAction=(count)=>{
//   let new_count=count-1;
//   return {
//     type:'DECREMENT',
//     payload:new_count
//   }
// }

// const countReducer=(state=0,action)=>{
//   switch(action.type){
//     case 'INCREMENT':
//       return action.payload;//new_count
//     case 'DECREMENT':
//       return action.payload;
//     default:
//       return state;
//   }
// }


const myStore=createStore(countReducer)
//myStore.subscribe(()=>console.log("STORE_STATE:",myStore.getState()));//Optional

// myStore.dispatch(incrementAction(myStore.getState()));
// myStore.dispatch(incrementAction(myStore.getState()));
// myStore.dispatch(incrementAction(myStore.getState()));

// myStore.dispatch(decrementAction(myStore.getState()));
// myStore.dispatch(decrementAction(myStore.getState()));



ReactDOM.render(
  <React.StrictMode>
    <Provider store={myStore}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
