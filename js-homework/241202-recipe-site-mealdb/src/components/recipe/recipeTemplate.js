const recipeTemplate = (mealTitle, mealId, mealImg, mealDesc)=>{
    return `
    <section class='container recipe mb-5'>
        <div class='row row-cols-1 row-cols-lg-2'>
            <div class='col mb-3'>
                <img class='card-img-top rounded' src='${mealImg}' alt='${mealTitle} picture'>
            </div>
            <div class='col'>
                <div>
                    <h2>${mealTitle}</h2>
                    <p>id: ${mealId}</p>
                    <p>${mealDesc}</p>
                    <ul class='ingredients'></ul>
                </div>
            </div>
        </div>    
    </section>
    `
}

export default recipeTemplate;