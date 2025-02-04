import { useState } from "react";

const AddArticle = (props)=>{
    const [formData, setFormData] = useState({
        title:'',
        content:''
    });

    const handleChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e)=>{
        e.preventDefault();
        props.onSave(formData)
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="form-group mb-2">
                <input onChange={handleChange} name="title" type="text" className="form-control" placeholder="Pavadinimas" value={formData.title}/>
            </div>
            <div className="form-group mb-2">
                <textarea onChange={handleChange} name="content" className="form-control" placeholder="Naujienos tekstas">{formData.content}</textarea>
            </div>
            <div className="form-group mb-3">
                <button type="submit" className="btn btn-secondary">Pridėti</button>
            </div>
        </form>
    )
}

export default AddArticle