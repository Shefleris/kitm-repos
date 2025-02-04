const ajaxService = (term) => {
    const url = ' https://api.postit.lt/?term=';
    const key = 'w9aNmirdkc46bIwYct0I';
    return fetch(`${url}${term}&key=${key}`)
        .then(response => response.json())
}

export default ajaxService;