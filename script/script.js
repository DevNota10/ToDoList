
    const btnTask = document.querySelector(".btn-add-task");
    const inputTask = document.querySelector(".input-task");
    const listTasks = document.querySelector(".list-tasks");

    // inputTask.addEventListener('')

    myList = [];

    function addNewTask(){
        myList.push({
           task: inputTask.value,
           completed: false,
        });
        inputTask.value = '';

        showTask();
    }

    function showTask (){
      
        let newLi = '';

        myList.forEach((item,index) =>{
            newLi =
             newLi +
            `  
             <li class="task ${item.completed && "done" }">
                <img  src="./img/checked.png" alt="Img-check" onclick="completeTask(${index})"/>
                <p>${item.task}</p>
                
                <img src="./img/trash.png" alt="Excluir-task" onclick="deleteItem(${index})">
              </li>
            `
        });
        listTasks.innerHTML = newLi
        localStorage.setItem('list', JSON.stringify(myList))

    };  

    function completeTask(index){
        myList[index].completed = !myList[index].completed
        showTask()
    };

    function deleteItem(index){
        myList.splice(index,1);
        showTask();
    };

    function reloadTasks(){
        const myTaskLocalStorage = localStorage.getItem('list')

        if(myTaskLocalStorage){
            myList = JSON.parse(myTaskLocalStorage );
        }
        showTask();
    };

    reloadTasks();
    btnTask.addEventListener("click", addNewTask);

    setInterval(()=>{
        const addanimeBtnPort = document.querySelector("#box-btn-port");
       addanimeBtnPort.classList.toggle('activeAnimation')

    },6000)
     


