function navbarTemplate (){
    return `
        <nav class="navbar navbar-expand-lg mt-3">
            <div class="container">
                <a class="navbar-brand" href="#">TheMealDb</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <button class="btn link" name="route" value="home">Home</button>
                        </li>
                        <li class="nav-item">
                            <button class="btn link" name="route" value="random">Random meal</button>
                        </li>
                    </ul>
                    <form class="d-flex" role="search">
                        <select class="api__method form-select input-group-prepend d-none">
                            <option value="name">Name:</option>
                            <option value="id">Id:</option>
                        </select>
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    `
}

export default navbarTemplate;