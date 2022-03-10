

// 1: DOM - HTML melumatlarimizi cagiraq


const cardBodyOne = document.querySelectorAll(".card-body")[0];
const cardBodyTwo = document.querySelectorAll(".card-body")[1];
const form = document.querySelector("#todo-form");
const addInput = document.querySelector("#todo-add-input");
const todoList = document.querySelector(".list-group");
const allDeleteButton = document.querySelector("#clear-todos");

// ==============================================


function eventListener(){
  form.addEventListener("submit", addTodo)
}

eventListener();


// todo submit function  - todo elave etmek

function addTodo(e){
   const addInputValue =  addInput.value.trim();
   if (addInputValue!="") {
    const listItem = document.createElement("li");

    listItem.className = "list-group-item d-flex justify-content-between";
    const link = document.createElement("a");
    link.href = "#";
    link.className = "delete-item";
    link.innerHTML = " <i style='color: red;' class = 'fa fa-remove'></i>"
    listItem.appendChild(document.createTextNode(addInputValue));
    
    listItem.appendChild(link);
    
    todoList.appendChild(listItem);
    addInput.value = "";
    messageContent("success", "todo todo-liste elave olundu")
   }
   else{
      messageContent("danger", "zehmet olsada olmasada boslugu doldur")
   }

 
   e.preventDefault();
}


function messageContent(type, text){
    const message = document.createElement("div");
    message.className = `alert alert-${type}`
    message.textContent = text;
    cardBodyOne.appendChild(message);
    setTimeout(()=>{
        message.remove();
    }, 2000);
    console.log(message);
}





