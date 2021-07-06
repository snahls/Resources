//import logo from './logo.svg';
import React from 'react';
export class Clock extends React.Component{
    constructor(){
        super();
        this.state={
 //           currentTime:new Date().toLocaleString(),
            message:''
        }
        this.msgref=React.createRef();
        
    }
    bAction(){
        this.setState({message:'Button clicked'})
        this.msgref.current.value="OK is clicked"
//sello.js        this.props.setCount(45);
    }

    
    render(){
        return <div>
            <h3>{this.state.message}</h3><input type="text" ref={this.msgref}/><br></br>
            <input type="button" name="OK" value="OK" onClick={this.bAction.bind(this)}/>
            <br/><br/>
            
        </div>
    }
//     static getDerivedStateFromProps(nextProps,prevState){
//         console.log("getDerivedStateFromProps");
//         return true;
//     }
//     componentDidMount(){
//         console.log("componentDidMount");
//         setInterval(()=>this.setState({currentTime:new Date().toLocaleString()}),1000);
//     }
//     shouldComponentUpdate(nextProps,nextState){
//         console.log("shouldComponentUpdate");
//         return true;
//     }
//     componentDidUpdate(prevProps,prevState){
//         console.log("componentDidUpdate");
//     }
//     getSnapshotBeforeUpdate(prevProps,prevState){
//         console.log("getSnapshotBeforeUpdate");
//         return true;
//     }
//     componentWillUnmount(){
//         console.log("componentWillUnmount");
//     }
}
