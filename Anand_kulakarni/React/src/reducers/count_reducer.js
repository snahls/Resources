const countReducer=(state=0,action)=>{
    switch(action.type){
      case 'INCREMENT':
        return action.payload;//new_count
      case 'DECREMENT':
        return action.payload;
      default:
        return state;
    }
  }

  export default countReducer;