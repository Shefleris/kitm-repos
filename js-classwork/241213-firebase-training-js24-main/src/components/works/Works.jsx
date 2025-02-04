import { useEffect, useState } from "react"
import WorksTable from "../worksTable/WorksTable"
import { Link } from "react-router-dom";
import * as service from "../../services/WorksCRUDservices";
import { useAuthState } from "react-firebase-hooks/auth";
import {auth} from "../../services/AuthServices";
const Works = ()=>{
    const [works, setWorks] = useState([]);
    const [user, loading, error] = useAuthState(auth);
    useEffect(()=>{
        if(loading) return;
        if(user){
            service.getAllWorks(works=>
                setWorks(works), user
            )}
    },[user, loading])
    console.log(works)
    return(
        <div className="container">
            <ul className="nav nav-pills">
                <li className="nav-item m-3">
                    <Link to="/add-work" className="nav-item btn btn-primary">Prideti atlikta darba</Link>
                </li>
            </ul>
            <h2>Works</h2>
            <WorksTable data={works}/>
        </div>
    )
}

export default Works