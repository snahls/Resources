//import logo from './logo.svg';
import React from 'react';
export class Assignment extends React.Component{
    constructor(){
        super();
        this.state={
            currentTime:new Date().toLocaleString(),
            msg:''
        }
        this.userref=React.createRef();
        this.passref=React.createRef();
    }
    okclick(){
        alert("OK clicked");
    }
    cclick(){
        alert("CANCEL clicked");
    }
    uAction(){
        if(this.userref.current.value===this.passref.current.value)
        this.setState({msg:'Login Successful'})
        else
        this.setState({msg:'Login Failed'})
    }
    
    render(){
        return <div>
        <h2>Hello World</h2>
        <button onClick={this.okclick.bind(this)}>OK</button>
        <button onClick={this.cclick.bind(this)}>CANCEL</button>
        <br/><br/>
        <form>
        <input type="text" ref={this.userref} placeholder="username" />
        <input type="text" ref={this.passref} placeholder="password" />
        <input type="button" name="OK" value="Submit" onClick={this.uAction.bind(this)}/>
        <br/>
        <h4>{this.state.msg}</h4>
        <h1>{this.state.currentTime}</h1>
        </form> 
        </div>
    }
    componentDidMount(){
                 console.log("componentDidMount");
                 setInterval(()=>this.setState({currentTime:new Date().toLocaleString()}),1000);
            }
}
