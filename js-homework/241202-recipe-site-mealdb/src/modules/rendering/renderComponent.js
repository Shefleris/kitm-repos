function renderComponent(location, componentTemplate, containerElement, containerAttributes){
    if (location !== undefined && containerElement!==undefined){
        const selectLocation = document.querySelector(location);
        const createContainer = document.createElement(containerElement);
        if (containerAttributes !== undefined){
            for (const [key, value] of Object.entries(containerAttributes)){
                createContainer.setAttribute(key, value)
            }
        }
        if (componentTemplate !== undefined){
            createContainer.innerHTML = componentTemplate;
        }
        selectLocation.append(createContainer);
    } else if (location !== undefined && componentTemplate!==undefined) {
        const selectLocation = document.querySelector(location);
        selectLocation.innerHTML += componentTemplate
    } else {
        console.error('renderComponent function is missing required parameters')
    }
};

export default renderComponent;

