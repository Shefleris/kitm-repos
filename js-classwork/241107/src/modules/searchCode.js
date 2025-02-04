import ajaxService from "./ajaxService";
import { readLocalSearchHist, writeLocalSearchHist } from "./localStorage";

const searchCode = () =>{
    document.querySelector('form').addEventListener('submit',(e)=>{
        e.preventDefault();
        let searchResponse
        const searchTerm = document.querySelector('.term').value;
        ajaxService(searchTerm)
            .then(result => searchResponse = result)
            .then(()=> console.log(searchResponse))
            // .then((result)=> renderResult(result[0].post_code))
            .then(()=>writeLocalSearchHist(searchTerm))
            .then(()=>readLocalSearchHist());
    })
}

export default searchCode;