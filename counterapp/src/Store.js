import {createStore} from 'redux';

const CounterReducer = (state=0,action) => {
    if (action.type === "INCREMENT")
    {return state + 1}
    if (action.type === "DECREMENT")
    {return Math.max(0, state - 1)}
    if (action.type === "RESET")
    {return state =0}
    return state
}
const Store = createStore (CounterReducer)



console.log(Store.getState())

Store.dispatch({
    type:"INCREMENT"
}
)

console.log(Store.getState())


export default Store;