import { useReducer } from "react"
import CounterButton from "../counterButton/counterButton"
import CounterDisplay from "../counterDisplay/counterDisplay"
import { initialState, reducer } from "../../reducer"

const Counter = ()=>{
    const [state, dispatch] = useReducer(reducer,initialState);
    return (
        <div>
            <CounterDisplay count={state.count}/>
            <CounterButton
                onClick={()=>{dispatch({type:'increment'})}}
                label="increment"
            />
            <CounterButton
                onClick={()=>{dispatch({type:'decrement'})}}
                label="Decrement"
            />
            <CounterButton
                onClick={()=>{dispatch({type:'reset'})}}
                label="Reset"
            />
        </div>
    )
}

export default Counter