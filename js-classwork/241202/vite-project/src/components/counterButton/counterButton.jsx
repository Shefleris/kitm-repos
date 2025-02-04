const CounterButton = ({onclick, label})=>{
    return(
        <button onclick={onclick}>{label}</button>
    )
}

export default CounterButton