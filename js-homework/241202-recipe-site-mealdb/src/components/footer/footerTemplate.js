import './_footer.scss'
const footerTemplate = ()=>{
    return `
        <footer class="mb-auto">
            <div class="container">
                <div class="row row-cols-1 row-cols-md-3">
                    <div class="col">
                        <h3>Menu</h3>
                        <ul class="footer_menu grid">
                            <li class="col"><button name="router" value="home" class="link">Home</button></li>
                            <li class="col"><button name="router" value="discover" class="link">Discover</button></li>
                            <li class="col"><button name="router" value="random" class="link">Random</button></li>
                            <li class="col"><button name="router" value="about" class="link">About</button></li>
                        </ul>
                    </div>
                    <div class="col">
                        <h3>Categories</h3>
                        <ul class="footer_categories grid">
                            <li class="col"><button name="filter" value="breakfast" class="link">Breakfast</button></li>
                            <li class="col"><button name="filter" value="starter" class="link">Starter</button></li>
                            <li class="col"><button name="filter" value="side" class="link">Side</button></li>
                            <li class="col"><button name="filter" value="desert" class="link">Desert</button></li>
                            <li class="col"><button name="filter" value="vegan" class="link">Vegan</button></li>
                            <li class="col"><button name="filter" value="vegatarian" class="link">Vegatarian</button></li>
                            <li class="col"><button name="filter" value="pasta" class="link">Pasta</button></li>
                            <li class="col"><button name="filter" value="miscellaneous" class="link">Miscellaneous</button></li>
                        </ul>
                    </div>
                    <div class='m-30 col about'>
                        <h2>About api</h2>
                        <p>
                            TheMealDB was built in 2016 to provide a free data source api for recipes online
                            in the hope that developers would build applications and cool projects on top of it.
                            TheMealDB originated on the Kodi forums as a way to browse recipies on your TV.
                        </p>
                    </div>
                </div>
            </div>
            <hr>
            <div class="container text-center">
                <p><i class="bi bi-github"></i> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                    </svg>
                    <a href="https://github.com/Shefleris/recipe-site-using-mealdb">github project</a>
                </p>
            </div>
        </footer>
    `
}

export default footerTemplate;