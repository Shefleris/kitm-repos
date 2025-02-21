export function ajaxService(querryTerm,querryType='s'){
        const apiKey = process.env.MIX_ADD_OMDB_API_KEY_HERE;
        const apiUrl = 'https://www.omdbapi.com/?apikey=';
        return fetch(`${apiUrl}${apiKey}&${querryType}=${querryTerm}`)
            .then(Response =>{
                if (!Response.ok){
                    throw new Error('Api response was not ok')
                }
                return Response.json();
            })
}