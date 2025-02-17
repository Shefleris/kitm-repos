import { useState } from "react"

const OrderForm = (props)=>{
    const [idNr, setIdNr] = useState(0);
    const [formData, setFormData] = useState({
        id:'',
        title:'',
        status:'',
    })

    const handleChange = (event)=>{
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        })
    }

    const submitHandler = (event)=>{
        event.preventDefault();
        setIdNr(idNr + 1);
        props.onSave(formData);
        console.log(formData)
    }
    

    
    return (
        <form onSubmit={submitHandler}>
            <div className="form-group mb-2">
                <input onChange={handleChange} type="hidden" name="id" value={formData.idNr} className="form-control"/>
            </div>
            <div className="form-group mb-2">
                <label htmlFor="title">Title: </label>
                <input onChange={handleChange} type="text" name="title" className="form-control" placeholder="Title" value={formData.title}/>
            </div>
            <div className="form-group mb-2">
                <label htmlFor="status">Status: </label>
                <input onChange={handleChange} type="text" name="status" className="form-control" placeholder="Status" value={formData.status}/>
            </div>
            <div className="form-group mb-3">
                <button type="submit" className="btn btn-secondary">Pridėti</button>
            </div>
        </form>
    )
}

export default OrderForm;