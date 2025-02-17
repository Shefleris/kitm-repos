const mealCardTemplate = (mealTitle, mealId, mealImg)=>{  
    const template = `
        <div class='col'>
            <article class='card h-100'>
                <img class='card-img-top' src='${mealImg}/preview' alt='${mealTitle} picture'>
                <div class='card-body d-flex flex-column'>
                    <h5 class='card-title'>${mealTitle}</h5>
                    <p> id: ${mealId}</p>
                    <button class='mealDetails btn btn-primary mt-auto' name='lookup' value='${mealId}'>Read more</button>
                </div>
                <ul></ul>
            </article>
        </div>
    `
    return template;
}

export default mealCardTemplate;
