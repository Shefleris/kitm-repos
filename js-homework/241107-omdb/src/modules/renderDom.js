import { form, movieCardTpl} from './domFormTemplate';

const renderForm = () =>{
    let formElement = document.createElement('form');
    formElement.class = 'from-inline';
    formElement.innerHTML = form;
    document.querySelector('main .card-body').appendChild(formElement)    
}

const renderResults = (result) => {
    const createCard = document.createElement('article');
    const createImgColDiv = document.createElement('div');
    const createDescColDiv = document.createElement('div');
    const createRowDiv = document.createElement('div');
    const createCardBody = document.createElement('div');

    for (const [key, value] of Object.entries(result)){
        if (key ==='Poster'){
            const createPoster = document.createElement('img');
            createPoster.src = value;
            createPoster.className = 'img-fluid rounded-start'
            createPoster.alt = `${result.title} poster`
            createImgColDiv.appendChild(createPoster)
        } else if (key === 'Title'){
            const createTitle = document.createElement('h2');
            createTitle.innerText = value;
            createTitle.className = 'card-title';
            createCardBody.appendChild(createTitle);
        } else {
            const createPar = document.createElement('p');
            createPar.className = 'card-text';
            createPar.innerText = `${key}: ${value}`;
            createCardBody.appendChild(createPar);
        }

        createCardBody.className = 'card-body';
        createImgColDiv.className = 'col-md-4';
        createDescColDiv.className = 'col-md-8';
        createRowDiv.className = 'row g-0';
        createCard.className = 'card mb-3 col-lg-4 col-md-5 col-xs-12';


        createDescColDiv.appendChild(createCardBody);
        createRowDiv.append(createImgColDiv, createDescColDiv);
        createCard.appendChild(createRowDiv);
        document.querySelector('.results').appendChild(createCard);
    }
}

const unrenderResults =()=>{
    const sectionResult = document.querySelector('.results');
    while (sectionResult.firstChild){
        sectionResult.removeChild(sectionResult.firstChild)
    }
}

export { renderForm, renderResults, unrenderResults };