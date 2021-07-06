import { useDispatch,useSelector } from "react-redux";
import incrementAction from '../actions/inc_action'
import decrementAction from '../actions/dec_action'

const Count=(props)=>{
    let dispatcher=useDispatch();
    let currentCount = useSelector((state)=>state);

    const incHandler=()=>{//Closure function
       // myStore.dispatch(incrementAction(myStore.getState()));
       dispatcher(incrementAction(currentCount));
    }
    const decHandler=()=>{//Closure function
      //  myStore.dispatch(decrementAction(myStore.getState()));
      dispatcher(decrementAction(currentCount));
    }
    return <div>
        <h1>Count={currentCount}</h1>
        <input type="button" value="+" onClick={incHandler}/>
        <br/><br/>
        <input type="button" value="-" onClick={decHandler}/>
    </div>
}
export default Count;