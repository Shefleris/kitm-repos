function searchResultTemplate (){
    return `
        <section class='section_search_results container mb-5'>
            <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item mb-4">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Advance filter options:
                        </button>
                    </h2>
                    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body row row-cols-1 g-3 row-cols-md-3">
                            <div class="col">
                                <label class="visually-hidden" for="main_ingredient">Choose main ingredient</label>
                                <input class="form-control" list="list-ingredient" name="main_ingredient" placeholder="Choose a main ingredient"/>
                            </div>
                            <div class="col">
                                <label class="visually-hidden" for="category">Choose a category</label>
                                <select class="form-select" name="category" id="category">
                                    <option value="" selected>Choose category</option>
                                </select>
                            </div>
                            <div class="col">
                                <label class="visually-hidden" for="area">Choose a country</label>
                                <select class="form-select" name="area" id="area">
                                    <option value="" selected>Choose country</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h2>Search results:</h2>
            <hr>
        </section>
    `
}

export default searchResultTemplate