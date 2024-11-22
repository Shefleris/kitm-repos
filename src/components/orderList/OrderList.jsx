import { useState } from "react";
import OrderForm from "../orderForm/OrderForm";
import OrderItem from "../orderItem/OrderItem";

const OrderList = ()=>{
    const [form, setForm] = useState(false)
    const [orders, setOrders] = useState([])

    const addOrder = (data)=>{
        setOrders((prevData)=>{
            return [...prevData, data]
        })
    }
    
    console.log(orders)

    return (
        <main className="container">
            <button onClick={()=>{setForm(true)}} className="btn btn-primary mb-3">Add order</button>
            {(form) && <OrderForm onSave={addOrder}/>}
            <h1>Order list:</h1>
            {orders?.map(order=>
                <OrderItem
                    id={order.id}
                    title={order.title}
                    status={order.status}
                />
            )}
        </main>
    )
}

export default OrderList