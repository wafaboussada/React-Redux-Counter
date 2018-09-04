import React, { Component } from 'react';
import {connect} from 'react-redux';

class Counter extends Component {
    render() {
const {count,incrementCounter=()=>{},decrementCounter=()=>{},reset=()=>{}}=this.props
        return(
            <div>
                <h1>I am a Counter !</h1>
                <p className="counter">Count:{count}</p>
                <button className="button" onClick={incrementCounter}>Increment</button>
                <button className="button" onClick={decrementCounter}>Decrement</button>
                <button className="button" onClick={reset}>Reset</button>
            </div>
        ) }
}
const mapStateToProps = state =>{
   return{count:state} 
}
const mapDispatchToProps = dispatch =>{
    return{
        incrementCounter:()=>{
            dispatch({
                    type:"INCREMENT"
            })
        },
        decrementCounter:()=>{
            dispatch({
                    type:"DECREMENT"
            })
        },
        reset:()=>{
            dispatch({
                    type:"RESET"
            })
        }
    }
}
const CounterContainer =connect(mapStateToProps,mapDispatchToProps)(Counter)
export default CounterContainer ;