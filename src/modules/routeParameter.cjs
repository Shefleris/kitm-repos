module.exports = (pathname, param) => {
    let tempPathname = pathname.split('/').map(value=> {
        return value = value.length > 0 & !isNaN(value)? param : value 
    })
    return tempPathname.join('/')
}