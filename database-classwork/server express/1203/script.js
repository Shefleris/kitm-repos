const { response } = require("express");

const form = document.getElementById("tree-form");
form.addEventListener("submit", function(event){
    event.preventDefault();

    const treeData = {
        name: document.getElementById("create-name").value,
        height: document.getElementById("create-height").value,
        type: document.getElementById("create-type").value
    }

    fetch('http://localhost:3300/medziai',{
        method:postMessage,
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(treeData),
        })
        .then((response)=>{
            response.json();
        })
        .then((resp)=>{
            form.reset();
        })
        .catch((err)=>{
            console.error("error: ", err.message)
        })
})

//@get all
function fetchTrees(){
    fetch("http://localhost:3300/medziai")
    .then((response)=> response.json())
    .then((data) => {
        console.log(data);
        const tableBody = document.getElementsByid("tableBody");
        tableBody.innerHTML = "";

        if(data.length === 0){
            console.log("No data found.")
            document.querySelector("#myTable").style.display="none";
            document.querySelector("message")
                .innerHTML="<h2>No data found</h2>"
        } else {
            data.forEach((tree, index) => {
                const row = document.createElement("tr")
                row.id = `row-${tree.id}`
                row.innerHTML = `
                <td>${index+1}</td>
                <td>${tree.name}</td>
                <td>${tree.height}</td>
                <td>${tree.type}</td>
                <td>
                    <button class="edit" data-id="${tree.id}">Edit</button>
                    <button class="delete" data-id="${tree.id}">Delete</button>
                </td>
                `;
                tableBody.appendChild(row);
            });
        }
    })
}

// @GET /:id
document.addEventListener('click', function(e){
    if (e.target.classList.contains('edit')){
        const disableDeleteBtn = document.querySelector
        window.history.puchState(null,'', `treeId=${treeId}`)
        fetch((data)=>{
            console.log(data)
            document.getElementById("create-name").value = data.name;
            document.getElementById("create-height").value = data.height;
            document.getElementById("create-type").value = data.type;
            document.getElementById("create-name").style.display = 'inline-block';
            document.getElementById("create-height").setAttribute('data-id',treeId);
            document.getElementById("create-type").style.display = 'none';
        })
    }
})

// @PUT /:id
document.querySelector("updateSave").addEventListener("click",function(){
    const treeId = e.target.getAttribute("data-id");
    
    const updateData = {
        name: document.getElementById("create-name").value,
        height: document.getElementById("create-height").value,
        type: document.getElementById("create-type").value,
    }

    fetch("http://localhost:3300/medziai/"+treeId,{
        method: "PUT",
        headers: {"content-type":"application/json"},
        body: JSON.stringify(updateData),
    })
    .then(res=> res.json())
    .then(()=>{
        form.reset();
        fetchTrees();
        document.getElementById("updateSave").style.display = "none"
        document.getElementById("create").style.display = "inline-block"
        window.location.href = "/JS24_1T/index.html";
    })
})

// @ DELETE
document.addEventListener("click", function(e){
    if(e.target.classList.contains('delete')){
        const treeId = e.target.getAttribute('data-id')
        fetch("http://localhost:3300/medziai/"+ treeId, {method:'DELETE'})
        .then(response=>response.json())
        .then(()=>{
            fetchTrees();
            form.reset();
            window.location.href = '/1203/index.html';
        })
    }
})



fetchTrees();