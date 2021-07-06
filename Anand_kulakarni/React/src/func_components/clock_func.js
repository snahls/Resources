import { useEffect, useState } from "react";

const ClockFunc=(props)=>{
   // console.log("clock function called");
    //let currentTime=new Date().toLocaleString();

    //React hook
    const [currentTime,setCurrentTime]=useState(new Date().toLocaleString());
   // const [count,setCount]=useState(5);

    useEffect(()=>{
        //console.log("useEffect called");
        setInterval(()=>{
        setCurrentTime(new Date().toLocaleString())
    },1000)
    },[]);

    const buttonAction=()=>{//closure
        console.log('button Called');
    }
    
    return <div>
        <h1>{currentTime}</h1>
        <input type="button" value="Submit" onClick={buttonAction} />
        </div>

}
export default ClockFunc;