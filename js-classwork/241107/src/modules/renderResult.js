const renderResult = (res)=>{
    let resElement = document.querySelector('.result')
    resElement.innerHTML = res;
    document.querySelector(main .card-body).appendChild(resElement)
}

export default renderResult;