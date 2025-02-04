export { ajaxService };

async function ajaxService() {
    const url = 'https://api.meteo.lt/v1/places';
    try {
        const response = await fetch(url);
        if (!response.ok){
            throw new Error(`Response status: ${response.status}`)
        }
        const json = await response.json();
        console.log(json)
        return json
    }
    catch (error){
        console.log(error.message);
    };
}
