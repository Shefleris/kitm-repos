import form from './form';

const renderForm = () =>{
    let formElement = document.createElement('form');
    formElement.class = 'from-inline';
    formElement.innerHTML = form();
    document.querySelector('main .card-body').appendChild(formElement)    
}

export default renderForm