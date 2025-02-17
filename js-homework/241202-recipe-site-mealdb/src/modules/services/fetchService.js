async function fetchService (requestUrl){
    try {
        const response = await fetch(requestUrl);
        if (!response.ok){
            throw new Error(`Api was not ok: ${response.status}`)
        }
        const responseJSON = await response.json();    
        return responseJSON;

    } catch (error) {
        console.error("Encountered error calling api:", error)
    }
};

export default fetchService;
 
