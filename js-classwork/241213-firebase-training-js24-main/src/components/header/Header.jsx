import User from "../user/User"
const Header = ()=>{
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <a href="" className="navbar-brand">Time logger</a>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                 <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                <User/>
            </div>
        </nav>
    )
}

export default Header