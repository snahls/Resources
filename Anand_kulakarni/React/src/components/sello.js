import React from 'react';
import PropTypes from 'prop-types';
import {Clock} from './clock'

export class Sello extends React.Component{
    constructor(){
        super();
       //this.count=0;//count is state
        this.state={count:0};
    }
    setCount(new_count){
        this.setState({count:new_count});
    }
   
    render(){
        return <div>
        <Clock/>
        <h1>Welcome to {this.props.fname} {this.props.lname} count={this.state.count}</h1>
        <button onClick={this.setCount.bind(this)}>Update</button>
        </div>
    }
}
    Sello.defaultProps={lname:'Harshith'};
    Sello.propTypes={
        "fname":PropTypes.string,
        "lname":function(props,propName,componentName){
            if(props[propName].length<5){
            return Error('Firstname should be less than 5 characters');
        }
    }
}
