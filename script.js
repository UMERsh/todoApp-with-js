let form = document.querySelector("form")
let ls = localStorage.getItem('todo');
let todo = ls?JSON.parse(ls):[];

document.querySelector('#enter').addEventListener('enter',(e)=>{
  const item = document.querySelector('form')
  createItem(item)
});

function createItem(item){
    todo.push(item.value)
    localStorage.setItem('todo',JSON.stringify(todo));
    location.reload();
}
form.addEventListener('submit',(e)=>{
    e.preventDefault();
  
    let inpData = form[0].value;
    todo.push(inpData);
    localStorage.setItem('todo',JSON.stringify(todo))
    location.reload();

    
});
todo.map((data,index)=>{
    document.querySelector("tbody").innerHTML +=
    
    `
    <tr>
    
    <td>${data}</td>
    <td> <i class="fas fa-times" style="cursor: pointer;" onclick=del(${index})></i></td> 
    </tr>
    `
});
function del(e){
    let deleted = todo.filter((data,index)=>{
        return index!==e;
    });
    localStorage.setItem('todo',JSON.stringify(deleted));
    location.reload();
}

