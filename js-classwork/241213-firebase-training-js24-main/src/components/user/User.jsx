import { useAuthState } from "react-firebase-hooks/auth";
import { getUserData, auth, logout } from "../../services/AuthServices";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
const User =()=>{
    const [user, loading, error] = useAuthState(auth);
    const [userData, setUserData] = useState({})
    const navigate = useNavigate();

    useEffect(()=>{
        if(loading) return;
        if(!user) navigate('/');
        getUserData(user, setUserData)
    },[user, loading ])

    return(
    <ul className="navbar-nav">
        <li className="nav-item">
            <a href="#" className="nav-link active">Pradinis</a>
            </li>
            {user &&
            <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {userData.name}
                </a>
                <ul className="dropdown-menu">
                    <li className="dropdown-item">{userData.email}</li>
                    <li onClick={logout}>Atsijungti</li>
                </ul>
            </li>}
       
    </ul>)
}

export default User