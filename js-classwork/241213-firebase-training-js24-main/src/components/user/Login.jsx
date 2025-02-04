import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {useAuthState}  from "react-firebase-hooks/auth";
import {auth, signInWithEmailAndPassword} from "../../services/AuthServices";
const Login = ()=>{
    const [userData, setUserData] = useState({
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
        signInWithEmailAndPassword(userData.email, userData.password)
    }

    return(
        <div className="container">
            <h2 className="mt-3 text-center">Prisijungti</h2>
            <form className="form" onSubmit={submitHandler}>
                <div className="mb-3">
                    <input type="email" className="form-control" placeholder="El. pastas"  name="email" onChange={handelChange} value={userData.email}/>
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control" placeholder="Slaptazodis"  name="password" onChange={handelChange}/>
                </div>
                <div className="mb-3">
                    <button type="submit" className="btn btn-primary">Prisijungti</button>
                </div>
            </form>
        </div>
    )
}

export default Login