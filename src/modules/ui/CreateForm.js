export class CreateUi{
    templateForm(){
        return `
        <div class="form-floating my-3">
            <input type="text" id="search" class="form-control term" placeholder='Įveskite miesto pavadinima'>
            <label for="search" placeholder>Paieška</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
        `
    }

    createForm(){
        let formElement = document.createElement('form');
        formElement.class = 'from-inline';
        formElement.innerHTML = this.templateForm();
        document.querySelector('header .card-body').appendChild(formElement)  
    }
}