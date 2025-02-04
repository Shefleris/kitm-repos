

export const writeLocalSearchHist = (searchQuery, postResult) => {
    let history = JSON.parse(localStorage.getItem('history'))
    let tempObject = {
        term: searchQuery,
        post_code: postResult
    }
    history.push(tempObject)
    localStorage.setItem("history", JSON.stringify(history))
}


export const readLocalSearchHist = () => {
    const history = JSON.parse(localStorage.getItem('history'))
    if (history !== null){
        for(const historyItem of history){
            console.log(historyItem)
        }
    }
}



// EXAMPLE
// const students = ["Ieva", "Tomas", "Tadas"]

// localStorage.setItem("students", JSON.stringify(students));

// const students = JSON.parse(localStorage.getItem('students'))

// for(const student of students){
//     console.log(student)
// }