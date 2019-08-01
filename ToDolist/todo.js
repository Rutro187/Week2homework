let submit = document.getElementById("Submit");
let priority = document.getElementById("Priority");
let todo = document.getElementById("ToDo");
let date = document.getElementById("TDDate")
let open = document.getElementById("Open")
let closed = document.getElementById("Closed")
let todoid = 0


submit.addEventListener("click", add);






function add(){
    let opendiv = document.createElement("div");
    let sevenSpaces='\xa0\xa0\xa0\xa0\xa0\xa0\xa0';
    let button = document.createElement("input")
    opendiv.innerText = `${todo.value} ${sevenSpaces} ${date.value} ${sevenSpaces} ${priority.value}`;
    opendiv.classList.add("todoborder");
    opendiv.id = todoid;
    opendiv.appendChild(button);
   button.value ="Delete";
   button.type ="Button";
   button.id= opendiv.id
//    button.addEventListener("click", deleteTodo(todoid));
// this shit is not working right now need to get the delete button to have the div id
   open.appendChild(opendiv);
   todoid ++;
    console.log(todo.value,date.value,priority.value)
}


function deleteTodo() {
    
}