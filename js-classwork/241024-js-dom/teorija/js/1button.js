// const articleId = document.getElementById("vip");
// console.log(articleId);

// const articleClass = document.getElementsByClassName("other");
// console.log(articleClass);

// const articleQuery = document.querySelector("article");
// console.log(articleQuery);

// document.querySelector('button').addEventListener('click', ()=>{
//     document.querySelector('article').style.backgroundColor = "red";
// })

// document.querySelector('button').addEventListener("click", ()=>{
//     for (let iteration of document.querySelectorAll('article')){
//         iteration.style.backgroundColor = "blue";
//     }
// })

document.querySelector("button").addEventListener("click", ()=>{
    for (let iteration of document.querySelectorAll("a")){
        iteration.href = "https://kitm.lt/";
    }
})