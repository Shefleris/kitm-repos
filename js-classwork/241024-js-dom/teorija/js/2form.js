document.querySelector('.showName button').addEventListener('click', (e)=>{
    e.preventDefault();
    console.log(e);
    e.target.style.backgroundColor="red";
    const userName = document.querySelector('.showName input').value;
    console.log(userName);
    document.querySelector('.result').textContent = `Vartotojo vardas yra: ${userName}`;
})