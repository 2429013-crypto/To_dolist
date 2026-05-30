let tasks= [];
const activeContainer = document.getElementById("active-tasks");
const completedcontainer = document.getElementById("completed-tasks");

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
    render();
});



function render(){ 
    // console.log(tasks);
    activeContainer.innerHTML = "";   
    completedcontainer.innerHTML = "";
     
    tasks.forEach((task,index) => {                                
      console.log(task.status);                                            
      if(task.status==0) {    
        activeContainer.innerHTML += `
        

        <div on class="flex gap-1vw ai-c jc-sb" style="background-color: red;">
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
        
          
        <div on class="flex gap-1vw ai-c jc-sb" style="background-color: blue;"> 
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
    // console.log(tasks);
    render();
} 
function completetask(index){
    tasks[index].status=1; 
    render(); 
}                                                      
    function edittask(index){      
      const task = tasks[index];         
      document.getElementById("name").value = task.name; 
      document.getElementById("date").value = task.date; 
      document.getElementById("priority").value = task.priority; 
      document.getElementById("comment").value = task.comment; 
        tasks.splice(index,1);
        render(); 
    }                                                       