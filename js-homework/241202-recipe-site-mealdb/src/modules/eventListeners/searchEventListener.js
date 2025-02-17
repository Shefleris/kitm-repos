import searchEvent from "../search/searchEvent";

async function searchEventListener() {
    document.querySelector('#mealSearch select').addEventListener('change', async (event)=>{
        event.preventDefault;
        switch (event.target.value) {
        }
    })
    document.querySelector('#mealSearch').addEventListener('submit', async (event)=>{
        event.preventDefault();
        const searchField = document.querySelector('#mealSearch input').value
        const selectOption = document.querySelector('#mealSearch select').value 
        if (searchField !== ''){
            searchEvent(selectOption, searchField)
        }
    })
}

export default searchEventListener;