function searchHeader (){
    return `
        <div class="mt-5">
            <h1>Discover recipe</h1>
            <form id="mealSearch" role="search" class="input-group mb-3 row row-cols-1 row-cols-lg-3  g-sm-3">
                <select name='apiMethod' class="api_method form-select input-group-prepend">
                    <option value="name" selected>Name:</option>
                    <option value="id">Id:</option>
                    <option value="firstLetter">First letter:</option>
                    <option value="category">Category:</option>
                    <option value="area">Area:</option>
                    <option value="ingredient">Main ingredient:</option>
                </select>
                <input type="text" list=''  class="api_term form-control w-50" placeholder="Search for recipe">
                <datalist id="list-ingredient"></datalist>
                <datalist id="list-category"></datalist>
                <datalist id="list-area"></datalist>
                <button class="btn btn-outline-success input-group-append" type="submit">Search</button>
            </form>
        </div>
    `
}

export default searchHeader;