import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {useAuthState}  from "react-firebase-hooks/auth";
import {auth, registerWithEmailAndPassword} from "../../services/AuthServices";
const Register = ()=>{
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password:''
    });

    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    const handelChange = (e)=>{
        setUserData({
            ...userData,
            [e.target.name]:e.target.value
        })
    }

    useEffect(()=>{
        if(loading) return;
        if(user) navigate("/works")
    },[loading, user])

    const submitHandler = (e)=>{
        e.preventDefault();
        console.log(userData);
        registerWithEmailAndPassword(userData.name, userData.email, userData.password)
    }

    return(
        <div className="container">
            <h2 className="mt-3 text-center">Registruokis</h2>
            <form className="form" onSubmit={submitHandler}>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Jusu vardas"  name="name" onChange={handelChange} value={userData.name}/>
                </div>
                <div className="mb-3">
                    <input type="email" className="form-control" placeholder="El. pastas"  name="email" onChange={handelChange} value={userData.email}/>
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control" placeholder="Slaptazodis"  name="password" onChange={handelChange}/>
                </div>
                <div className="mb-3">
                    <button type="submit" className="btn btn-primary">Registruotis</button>
                </div>
            </form>
        </div>
    )
}

export default Register