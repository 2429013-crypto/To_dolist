let tasks = JSON.parse(localStorage.getItem("tasks") || "[]");//if the data exist it will load it and if not it will use simply[] to show empty array
//let tasks= [];
const activeContainer = document.getElementById("active-tasks");
const completedcontainer = document.getElementById("completed-tasks"); 
render(); 

document.getElementById("taskform").addEventListener("submit", function(event){

    event.preventDefault();
    
   const taskname = document.getElementById("name").value;
    const date = document.getElementById("date").value; 
    const priority = document.getElementById("priority").value;
    const comment = document.getElementById("comment").value;         
    // console.log(taskname);
    // console.log(date);
    // console.log(priority);                                                                                                   
    // console.log(comment);  

    tasks.push({                    
        name:taskname,   
        date:date,                  
        priority:priority,                                                               
        comment:comment,
        status:0, 
    }); 
  localStorage.setItem("tasks",JSON.stringify(tasks));                                                        
  document.getElementById("taskform").reset(); 

   //Json.stringify is used to store 
    render(); 
});                                                                  
function render(){ 
    // console.log(tasks);
    activeContainer.innerHTML = "";//to clear the container before rendering the tasks again  
    completedcontainer.innerHTML = "";
     
    tasks.forEach((task,index) => {                                 
    // console.log(task.status);                
      let color = "lightblue"; //default 
      if(task.priority == "High") {
        color = "red"; 
      } 
      else if(task.priority == "Mid") { 
        color = "orange";  
      }                     
      else if(task.priority == "Low") {
        color = "yellow";  
      }                                      
      if(task.status==0) {    
        activeContainer.innerHTML += `
 <div on class="flex gap-1vw ai-c jc-sb" style="background-color: ${color};">
        <div class="flex gap-1vw ">

                <h3>${task.name}</h3>

                <h3>${task.date}</h3>

                <h3>${task.priority}</h3>                              

                <h3>${task.comment}</h3>
                
                </div>
                <div>
                <button onclick="deletetask(${index})">delete</button>
                <button onclick="completetask(${index})">completed</button> 
                <button onclick="edittask(${index})">edit</button> 
                </div>
                
                </div>
                
        `;  
      }                                                                                                 
      else if(task.status==1) {  
          completedcontainer.innerHTML += `              

          
          
          <div on class="flex gap-1vw ai-c jc-sb" style="background-color: ${color};"> 
          <div class="flex gap-1vw ">
          
          <h3>${task.name}</h3> 
          
          <h3>${task.date}</h3>
          
          <h3>${task.priority}</h3>
          
          <h3>${task.comment}</h3>
          
          </div>
          
          </div>
          
          `;
        } 
    });                   
     
}

function deletetask(index){
    // console.log(tasks); 
    tasks.splice(index, 1);                    
    localStorage.setItem("tasks",JSON.stringify(tasks));
    // console.log(tasks);
    render();
}  
function completetask(index){
    tasks[index].status=1;         
    localStorage.setItem("tasks",JSON.stringify(tasks));
    render(); 
}                                                      
    function edittask(index){      
      const task = tasks[index];         
      document.getElementById("name").value = task.name; 
      document.getElementById("date").value = task.date; 
      document.getElementById("priority").value = task.priority; 
      document.getElementById("comment").value = task.comment; 
        tasks.splice(index,1);              
        localStorage.setItem("tasks",JSON.stringify(tasks)); 
        render();  
    }                                                       