import { ajaxService } from "./ajaxService";
import { renderResults, unrenderResults } from "./renderDom";

const getSearch = ()=>{
    document.querySelector('form').addEventListener('submit', (event)=>{
        event.preventDefault();
        let searchResult;
        const searchTerm = document.querySelector('.term').value;
        unrenderResults();
        ajaxService(searchTerm)
            .then(result => {return searchResult = result})
            .then(searchResult=> {console.log(searchResult)
                return searchResult;
            })
            .then(searchResult=>searchResult.Search.forEach(movie => {
                renderResults(movie);
            }))
    });
}

export { getSearch } ;