const taskInput = document.querySelector('#task'); //the task input text field
const form = document.querySelector('#task-form'); //The form at the top
const filter = document.querySelector('#filter'); //the task filter text field
const taskList = document.querySelector('.collection'); //The UL
const clearBtn = document.querySelector('.clear-tasks'); //the all task clear button
const reloadIcon = document.querySelector('.fa'); //the reload button at the top navigation 

const asc = document.querySelector('#asc');         



//DB variable 

let DB;
let ta=[];
let tb=[];


// Add Event Listener [on Load]
document.addEventListener('DOMContentLoaded', () => {
    // create the database
    let TasksDB = indexedDB.open('tasks', 1);

    // if there's an error
    TasksDB.onerror = function() {
            console.log('There was an error');
        }
        // if everything is fine, assign the result to the instance
    TasksDB.onsuccess = function() {
        // console.log('Database Ready');

        // save the result
        DB = TasksDB.result;

        // display the Task List 
        displayTaskList();
    }

    // This method runs once (great for creating the schema)
    TasksDB.onupgradeneeded = function(e) {
        // the event will be the database
        let db = e.target.result;

        // create an object store, 
        // keypath is going to be the Indexes
        let objectStore = db.createObjectStore('tasks', { keyPath: 'id', autoIncrement: true });

        // createindex: 1) field name 2) keypath 3) options
        objectStore.createIndex('taskname', 'taskname', { unique: false });

        console.log('Database ready and fields created!');
    }

    form.addEventListener('submit', addNewTask);
    asc.addEventListener('click',ascSort);
    dsc.addEventListener('click',dscSort);
    filter.addEventListener('keyup',filterTask)


    function addNewTask(e) {
        e.preventDefault();

        // Check empty entry
        if (taskInput.value === '') {
            taskInput.style.borderColor = "red";

            return;
        }

        // create a new object with the form info
        let newTask = {
            taskname: taskInput.value,
        }

        // Insert the object into the database 
        let transaction = DB.transaction(['tasks'], 'readwrite');
        let objectStore = transaction.objectStore('tasks');

        let request = objectStore.add(newTask);

        // on success
        request.onsuccess = () => {
            form.reset();
        }
        transaction.oncomplete = () => {
            console.log('New appointment added');

            displayTaskList();
        }
        transaction.onerror = () => {
            console.log('There was an error, try again!');
        }

    }

    function add(id,taskname){

        // Create an li element when the user adds a task 
        const li = document.createElement('li');
        //add Attribute for delete 
        li.setAttribute('data-task-id',id);
        // Adding a class
        li.className = 'collection-item';
        // Create text node and append it 
        li.appendChild(document.createTextNode(taskname));
        ta.push(taskname)
        tb.push(id)

        // Create new element for the link 
        const link = document.createElement('a');
        // Add class and the x marker for a 
        link.className = 'delete-item secondary-content';
        link.innerHTML = `
         <i class="fa fa-remove"></i>
        &nbsp;
        <a href="./edit.html?id=${id}"><i class="fa fa-edit"></i> </a>
        `;
        // Append link to li
        li.appendChild(link);
        // Append to UL 
        taskList.appendChild(li);
        
    }


    function displayTaskList() {
        // clear the previous task list
        while (taskList.firstChild) {
            taskList.removeChild(taskList.firstChild);
        }

        // create the object store
        let objectStore = DB.transaction('tasks').objectStore('tasks');

        objectStore.openCursor().onsuccess = function(e) {
            // assign the current cursor
            let cursor = e.target.result;

            if (cursor) {

                add(cursor.value.id, cursor.value.taskname);
                cursor.continue();
            }
        }
    }

    // Remove task event [event delegation]
    taskList.addEventListener('click', removeTask);

    function removeTask(e) {

        if (e.target.parentElement.classList.contains('delete-item')) {
            if (confirm('Are You Sure about that ?')) {
                // get the task id
                let taskID = Number(e.target.parentElement.parentElement.getAttribute('data-task-id'));
                // use a transaction
                let transaction = DB.transaction(['tasks'], 'readwrite');
                let objectStore = transaction.objectStore('tasks');
                objectStore.delete(taskID);

                transaction.oncomplete = () => {
                    e.target.parentElement.parentElement.remove();
                }

            }

        }

    }

    //clear button event listener   
    clearBtn.addEventListener('click', clearAllTasks);

    //clear tasks 
    function clearAllTasks() {
        let transaction = DB.transaction("tasks", "readwrite");
        let tasks = transaction.objectStore("tasks");
        // clear the table.
        tasks.clear();
        displayTaskList();
        console.log("Tasks Cleared !!!");
    }

    function ascSort(){
        taskList.removeChild(taskList.firstChild)
        taskList.innerHTML=""
 
        var arrTemp = [...ta]
        var arrTemp2 = [...tb]

        arrTemp = arrTemp.reverse()
        arrTemp2 = arrTemp2.reverse()
 
          
 
       var temp=0;

        arrTemp.forEach(function(task){
        
         
         filterFun( arrTemp2[temp],task);
         temp ++;
 
     }
        );

       
        
     }

     function dscSort(){
        taskList.removeChild(taskList.firstChild)
        taskList.innerHTML=""
 
        var arrTemp = [...ta]
        var arrTemp2 = [...tb]
      
 
       var temp=0;

        arrTemp.forEach(function(task){
        
         
         filterFun( arrTemp2[temp],task);
         temp ++;
 
     }
        );
        
     }



     function filterFun(id,taskname){
    

            // Create an li element when the user adds a task 
            const li = document.createElement('li');
            //add Attribute for delete 
            li.setAttribute('data-task-id',id);
            // Adding a class
            li.className = 'collection-item';
            // Create text node and append it 
            li.appendChild(document.createTextNode(taskname));
    
            // Create new element for the link 
            const link = document.createElement('a');
            // Add class and the x marker for a 
            link.className = 'delete-item secondary-content';
            link.innerHTML = `
             <i class="fa fa-remove"></i>
            &nbsp;
            <a href="./edit.html?id=${id}"><i class="fa fa-edit"></i> </a>
            `;
            // Append link to li
            li.appendChild(link);
            // Append to UL 
            taskList.appendChild(li);
            
        
    
      }

      function filterTask(){
        searchValue = filter.value;
        var arrTemp= [];
        var arrTemp2 = []
      
 
        var temp=0;
 
       
    

        if(taskList.innerHTML){
           taskList.removeChild(taskList.firstChild)
           taskList.innerHTML=""
    
       }
       
        ta.forEach((element,index) => {
            if(element.includes(searchValue)){
                arrTemp.push(element);
                arrTemp2.push(index);
            }
        });

              
        arrTemp.forEach(function(task){
         
          
            filterFun( arrTemp2[temp],task);
            temp ++;
    
        }
      );

 }


});