document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Kindly Enter Task ")
    }

    else{
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <span>
                 <button class="checkbox">&#10003</button>
                <button class="delete">X
                </button>
               
                </span>
            </div>
        `;
        let current_tasks1 = document.querySelectorAll(".checkbox");
        for(let i=0; i<current_tasks1.length; i++){
            current_tasks1[i].onclick = function(){
                this.parentNode.parentNode.style.textDecoration="line-through";
            }
            
        }

        let current_tasks = document.querySelectorAll(".delete");
        for(let i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.parentNode.remove();
            }
            
        }
       
     document.querySelector("#newtask input").value = ""; 
    }
}
