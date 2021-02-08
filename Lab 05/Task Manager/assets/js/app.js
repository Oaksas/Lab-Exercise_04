    
const taskInput = document.querySelector('#task');            
const form = document.querySelector('#task-form');   
const filter = document.querySelector('#filter');                 
const taskList = document.querySelector('.collection');         
const clearBtn = document.querySelector('.clear-tasks'); 
const asc = document.querySelector('#asc');         
const dsc = document.querySelector('#dsc'); 



var ta =[];
var date =[];


form.addEventListener('submit',addNewTask);
clearBtn.addEventListener('click',clearAllTasks)
filter.addEventListener('keyup',filterTask)
taskList.addEventListener('click', removeTask);
asc.addEventListener('click',ascSort);
dsc.addEventListener('click',dscSort);

const reloadIcon = document.querySelector('.fa');   
reloadIcon.addEventListener('click', reloadPage);
document.addEventListener('DOMContentLoaded', loadTasksfromDB);


function reloadPage() {
    location.reload();
}





function addNewTask(e){
e.preventDefault();
    if(taskInput.value === ""){
        
        taskInput.style.borderColor="red"
        return;
    }
    add(taskInput.value)
    addToDatabase(taskInput.value);

    
  

}
function add(eachTask){

    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(eachTask));
    ta.push(eachTask)
    const link = document.createElement('a');
    // const dateSpan = document.createElement('span')
    // dateSpan.innerHTML = new Date()
    // dateSpan.style.display = "none"
    // date.push(dateSpan.value)
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // li.appendChild(dateSpan);
    li.appendChild(link);
    taskList.appendChild(li);
    
}



function clearAllTasks(){
    taskList.innerHTML=''
    if(taskList.firstChild){
        taskList.removeChild(taskList.firstChild)
    }
    localStorage.clear();


}




function removeTask(e){
    if (e.target.parentElement.classList.contains('delete-item'))
    {
        if (confirm('Are You Sure about that ?'))
        {


           e.target.parentElement.parentElement.remove();
           removefromDB(e.target.parentElement.parentElement);
           
    

        }

    }

}
function removefromDB(taskItem) {

    // console.log(taskItem.textContent);
    let listofTasks;
    if (localStorage.getItem('tasks') == null) {
        listofTasks = [];
    } else {
     listofTasks = JSON.parse(localStorage.getItem('tasks'));
     listofTasks.forEach(function(task, index) {
        if (taskItem.textContent.trim() == task.trim()){
       
            listofTasks.splice(index, 1);

        }
    });
    localStorage.setItem('tasks', JSON.stringify(listofTasks));

    }
    

}

    function ascSort(){
       taskList.removeChild(taskList.firstChild)
       taskList.innerHTML=""

       var arrTemp = [...ta]
       arrTemp = arrTemp.reverse()

         

       arrTemp.forEach(function(element){
        filterFun(element)

    }
       );
       



       
    }
    function dscSort(){
        taskList.removeChild(taskList.firstChild)
        taskList.innerHTML=""
 
        var arrTemp = ta
 
        arrTemp = [... arrTemp]  
 
        arrTemp.forEach(function(element){
   filterFun(element)
         } );
        
 
 
 
        
     }
 



     function filterTask(){
         searchValue = filter.value;
         var arrTemp= []
         if(taskList.innerHTML){
            taskList.removeChild(taskList.firstChild)
            taskList.innerHTML=""
     
        }
        
         ta.forEach(element => {
             if(element.includes(searchValue)){
                 arrTemp.push(element)
             }
         });

               
    arrTemp.forEach(function(element){
          filterFun(element)

    

    }
       );



        
  


  }
  function filterFun(element){
    const link = document.createElement('a');
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(element))
   link.className = 'delete-item secondary-content'
   link.innerHTML = '<i class="fa fa-remove"></i>'
   li.appendChild(link)
   taskList.appendChild(li)
  }
 
          

function loadTasksfromDB() {
    let listofTasks = loadfromDB();
    if (listofTasks.length != 0) {



        listofTasks.forEach(function(eachTask) {

           add(eachTask);
        });

    }

 }