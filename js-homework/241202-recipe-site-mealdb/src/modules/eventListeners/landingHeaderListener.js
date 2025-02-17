import displaySearchPage from "../../pages/displaySearchPage"


function landingHeaderListener(){
    document.querySelector('.header__landing').addEventListener('click',async (event)=>{
        event.preventDefault
        console.log(event)
        if (event.target.nodeName == 'BUTTON'){
            await displaySearchPage()
        }
    })
}

export default landingHeaderListener;