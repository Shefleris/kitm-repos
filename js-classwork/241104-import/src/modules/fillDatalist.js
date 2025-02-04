import { ajaxService } from "./ajaxService";
export { fillDatalist };

function fillDatalist(){
    const selectList = document.querySelector('datalist');
    ajaxService().then(x=>{
        x.forEach(element => {
            for(let [key, value] of Object.entries(element)){
                if (key==="name"){
                    const createOption = document.createElement('option');
                    createOption.value = value
                    selectList.appendChild(createOption)
                }
            } 
        });

    });
}