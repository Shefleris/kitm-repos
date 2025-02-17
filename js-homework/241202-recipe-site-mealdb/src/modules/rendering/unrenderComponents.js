function unrenderComponents(containerElement, removeContainer=false){
    const selectElement = document.querySelector(containerElement);
    while (selectElement.firstChild){
        selectElement.removeChild(selectElement.firstChild);
    };
    if (removeContainer!==false){
        selectElement.remove();
    };
};

export default unrenderComponents;