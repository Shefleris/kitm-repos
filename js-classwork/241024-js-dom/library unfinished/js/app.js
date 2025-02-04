let counter = 0;

document.querySelector('#prideti button').addEventListener('click',(e)=>{
    e.preventDefault();
    const knygosPavadinimas = document.querySelector('#pavadinimas').value;
    const knygosAutorius = document.querySelector('#autorius').value;
    addBookToList(knygosPavadinimas, knygosAutorius);
    
});

function addBookToList(knygosPavadinimas,knygosAutorius){
    if (counter = 5){counter = 0;}; 
    const divSelect = document.querySelectorAll('.knygos div');
    divSelect[counter].querySelector('.knygos h2').textContent = `Knygos pavadinimas: ${knygosPavadinimas}`;
    divSelect[counter].querySelector('.knygos p').textContent = `Knygos autorius: ${knygosAutorius}`;
    return counter++;
}
