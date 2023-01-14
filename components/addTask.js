import checkComplete from './checkComplete.js';
import deleteIcon from './deleteIcon.js';
import { displayTasks } from './readTasks.js';

export const addTask = (evento) => {
    evento.preventDefault();

    const list = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    const calendar = document.querySelector('[data-form-date]');

    const value = input.value;
    const date =calendar.value;
    const dateFormat = moment(date).format("DD/MM/YYYY"); /** console.log(moment(date).format("DD/MM/YYYY")); */
      
    if(value == "" || date == ""){
      return;
    }

        input.value = '';
        calendar.value = "";

    const complete = false;

// cada ves que creamos nueva tarea queremos que se  agregue ese 
// identificador unico !!!
     const taskObj = {
           value,
           dateFormat,
           complete,
           id: uuid.v4()
     };

     list.innerHTML = "";

    const taskList = JSON.parse(localStorage.getItem("tasks")) || [];
          taskList.push(taskObj);  /**(value, dateFormat);    llamamos dicho array y le vamos agragando taskObj || le agregamos los valores aca */ 
          localStorage.setItem("tasks",JSON.stringify(taskList));

          displayTasks();

//     const task = createTask(taskObj);    /**esto lo eliminamos */
//            list.appendChild(task);   
  };
//   ek createTAsk se manda a llamar cuando el usuario le da click a nueva tarea
//  y cuando lee nuesatro prgograma 
  export const createTask = ( {value,dateFormat, complete, id }) => {
         const task = document.createElement('li');
         task.classList.add('card');
   
    const taskContent = document.createElement('div');
    
    // console.log(complete)

    const check = checkComplete(id)

    if(complete){
      // console.log("completada")
      check.classList.toggle('fas');
      check.classList.toggle('completeIcon');
      check.classList.toggle('far');
    }
    const titleTask = document.createElement('span');
          titleTask.classList.add('task');
          titleTask.innerText = value;
          taskContent.appendChild(check);
          taskContent.appendChild(titleTask);
    
     // creando nuestro elemento que es span
    const dateElement = document.createElement("span");
          dateElement.innerHTML = dateFormat
          task.appendChild(taskContent);
          task.appendChild(dateElement)
          task.appendChild(deleteIcon(id));
    return task;
  };

  /**primero importamos la funcion readTAsk(3) y despues llamamos dicha funcion(32)
   * con esto hacemos que cuando creemos nueva tarea aparesca donde debe ..
   * pero aparece mas abajo ..entonces lo solucionamos con el list.innerHTML = "";
   * por cada una de las tareas que se esten agregando cada ves que hacemos click
   *  en el boton lo que va a hacer es que este vacio y despues readTask va agregando cada una de las tareas
    */