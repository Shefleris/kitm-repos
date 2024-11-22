const OrderItem = (props)=>{
    console.log('Component rendered')
    return (
        <article>
            <h2>{props.title}</h2>
            <p>{props.status}</p>
            <p>{props.id}</p>
        </article>
    )
}

export default OrderItem;