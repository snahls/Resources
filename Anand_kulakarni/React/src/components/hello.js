import React from 'react';
import PropTypes from 'prop-types';
export class Hello extends React.Component{
    constructor(){
        super();
       //this.count=0;//count is state
        this.state={count:0};
    }
    inc(){
        this.setState({count:this.state.count+1});
    }
   
    render(){
        return <div>
        <h1>Welcome to {this.props.fname} {this.props.lname} count={this.state.count}</h1>
        <button onClick={this.inc.bind(this)}>Update</button>
        </div>
    }
}
    Hello.defaultProps={lname:'Harshith'};
    Hello.propTypes={
        "fname":PropTypes.string,
        "lname":function(props,propName,componentName){
            if(props[propName].length<5){
            return Error('Firstname should be less than 5 characters');
        }
    }
}
