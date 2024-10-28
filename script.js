const imageList = [{path:'./assets/pexels-abbykihano-230129.jpg', alt:"picture of some tulips"},
{path:'./assets/pexels-alex-andrews-271121-821736.jpg', alt:"picture of a cat"},
{path:'./assets/pexels-darrel-und-217939-1242286.jpg', alt:"picture of a flower"},
{path:'./assets/pexels-ivan-samkov-5429035.jpg', alt:"cowboy pumpkin"},
{path:'./assets/pexels-kpaukshtite-5429056.jpg', alt:"picture of a mushroom harvest"},
{path:'./assets/pexels-pixabay-45201.jpg', alt:"picture of a cat"},
{path:'./assets/pexels-pixabay-220938.jpg', alt:"picture of a dog"},
{path:'./assets/pexels-pixabay-372166.jpg', alt:"picture of a bunny"},
{path:'./assets/pexels-suzyhazelwood-1578105.jpg', alt:"picture of some flowers"},
{path:'./assets/pexels-viktor-smith-593827-1420405.jpg', alt:"picture of a dog"},
];

function createLayout (){
    const createAside = document.createElement('aside');
    const createMain = document.createElement('main');
    const createButton = document.createElement('button');
    createButton.textContent = "Rodyti";
    createButton.id = 'rodyti'
    createAside.append(createButton);
    document.querySelector('.container').append(createAside, createMain)
}

function fillWithDivs(divCount){
    for (let i=0; i < divCount; i++ ){
        const createDiv = document.createElement('div');
        const createImg = document.createElement('img');
        createImg.src = imageList[i].path;
        createImg.alt = imageList[i].alt;
        createImg.className = 'images';

        createDiv.append(createImg);
        document.querySelector('main').append(createDiv);
    }
}

function randomizeImages(){
    let randomizedArray = imageList.sort(() => Math.random()-0.3)
    for(let i in document.querySelectorAll('main div img')){
        const modifyImg = document.querySelectorAll('main div img')[i];
        modifyImg.src = randomizedArray[i].path;
        modifyImg.alt = randomizedArray[i].alt;

}}


function replaceButton(){
    const selButton = document.querySelector('aside > button')
    selButton.remove()
    const createButton = document.createElement('button')
    createButton.textContent = "Maišyti"
    createButton.id = 'maisyti'
    document.querySelector('aside').append(createButton);
}

function toggleButton(){
    const selButton = document.querySelector('aside > button')
    selButton.disabled == true ? selButton.disabled = false: selButton.disabled = true; 
}

function toggleImageEnlarged(element){
    if (document.querySelector('.image--enlarged') !== null){
    document.querySelector('.image--enlarged').classList.toggle('image--enlarged')
    } else {
    element.classList.toggle('image--enlarged')
    };
};

/// Usage

createLayout();

document.querySelector('aside').addEventListener('click', (event)=>{
    let buttomInteraction = event.target.id;
    switch (buttomInteraction){
        case 'rodyti':
            fillWithDivs(10);
            replaceButton();
            break
        case 'maisyti':
            toggleButton();
            randomizeImages();
            setTimeout(() => {
                toggleButton();
              }, "1000");
            break;
    }
});

document.querySelector('main').addEventListener('dblclick', (event) => {
    let selectImg = event.target.closest('div');
    toggleImageEnlarged(selectImg);
});