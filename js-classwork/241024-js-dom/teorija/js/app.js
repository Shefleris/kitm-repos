document.querySelector('.showName button').addEventListener('click', (e)=>{
    e.preventDefault();
    // create element
    const li = document.createElement('li');
    // modify element
    li.textContent = `Test`
    // append element
    document.querySelector('.result').appendChild(li);
})