function searchInputOptionsListener (){
    document.querySelector('#mealSearch select').addEventListener('change', async (event)=>{
        event.preventDefault
        const selectInput = document.querySelector('#mealSearch input')
        let newInput = document.createElement('input')
        let atributes = {
            type:'text',
            list: `list-${event.target.value}`,
            class:"api_term form-control w-50",
            placeholder: `Search by ${event.target.value}`
        }

        for (const [key, value] of Object.entries(atributes)){
            newInput.setAttribute(key, value)
        }
        selectInput.replaceWith(newInput)
    })
}

export default searchInputOptionsListener;
