/**
 * Get user by id
 * @param {string} data data to filter
 * @param {string} value value to filter by
 * @param {string} filterCollumn data collumn by which to filter
 * @returns {Array}
 */
module.exports = (data, value, filterCollumn = 'id') => {
    result = data.filter(item => item[filterCollumn] === value)
    
    if (result.length >=1){
        return result;
    } else if (!value){
        return {
            error:`${filterCollumn} not provided`
        }
    } else {
        return {
            error: `No items with that ${filterCollumn}`
        }
    }
}