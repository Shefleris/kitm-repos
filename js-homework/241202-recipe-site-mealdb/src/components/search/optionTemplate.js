function optionTemplate (optionValue, optionText=''){
    return`
        <option value=${optionValue}>${optionText}</option>
    `
}

export default optionTemplate;