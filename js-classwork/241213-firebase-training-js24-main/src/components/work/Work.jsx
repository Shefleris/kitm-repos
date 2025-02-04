import { Link, useParams, useNavigate } from "react-router-dom";
import * as service from "../../services/WorksCRUDservices";
const Work = (props)=>{
    const navigate = useNavigate();
    const {id} = useParams();
    
    const deleteHandler = ()=>{
        service.deleteWork(props.id);
        navigate('/');
    }
    return(
        <tr>
            <td>{props.date}</td>
            <td>{props.company}</td>
            <td>{props.service}</td>
            <td>{props.description}</td>
            <td>{props.from}</td>
            <td>{props.to}</td>
            <td><Link className="btn btn-primary"  to={`/update-work/${props.id}`}>Keisti</Link></td>
            <td><a className="btn btn-danger"  onClick={deleteHandler}>Šalinti</a></td>
        </tr>
    )
}

export default Work