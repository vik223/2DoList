function addTodo() {
    let addButton = document.getElementById('addButton');
    let inputField = document.getElementById('inputField');
    let todo = document.getElementById('todo');
    

    var paragraph = document.createElement('p');
    paragraph.innerHTML = inputField.value;
    todo.appendChild(paragraph);


    inputField.value = "";

    paragraph.addEventListener('click', function(){ 
        paragraph.style.textDecoration = "line-through";
    })
    
    paragraph.addEventListener('dblclick', function() { 
        todo.removeChild(paragraph);
    })

    console.log(paragraph.innerHTML);
    
}
