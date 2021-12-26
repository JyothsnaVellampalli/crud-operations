'use strict';
let url="https://61c5cd11c003e70017b7991b.mockapi.io/users";
let datacontainer=document.getElementById("datacontainer");




//read data
function getData(){
    fetch(url,{
        method: 'GET',
        headers: {
            "content-type": "application/json"
        },
    }).then(response => response.json())
    .then(data => {console.log(data);
        document.getElementsByClassName("table").innerHTML="";
        data.forEach((per)=>{
        displayData(per);
        console.log(per)})
    })
    .catch(err => {console.log(err)})
}
getData();

//create getData
function createData(){
    let data = {
        name:"Jyothsna",
        email:"jjjjjjj@gmail.com",
        id:"21"
    };
    fetch(url,{
        method: 'POST',
        body:JSON.stringify(data),
        headers: {
            "content-type": "application/json"
        },
    }).then(response => response.json())
    .then(data=>console.log(data))
    .catch(err=>console.log(err))
}
//createData();
//getData();

//update data
function updateData(){
    let data = {
        name:"kkkkkkk",
        email:"jhhhhh@gmail.com",
        
    };
    fetch(url+"/22",{
        method: 'PUT',
        body:JSON.stringify(data),
        headers: {
            "content-type": "application/json"
        },
    }).then(response => response.json())
    .then(data=>console.log(data))
    .catch(err=>console.log(err))
}
// updateData();
// getData();

//delete data
function DeleteData(){
    fetch(url+"/20",{
        method: 'DELETE',
        headers: {
            "content-type": "application/json",
        }
    }).then(response => response.json())
    .then(data=>console.log(data))
    .catch(err=>console.log(err))
}
//DeleteData();
//getData()

function displayData(obj){
    document.querySelector("#table").innerHTML+=`
    <tr>
    <td>${obj.name}</td>
    <td>${obj.email}</td>
    <td>${obj.id}</td>
    </tr>`

}
    
