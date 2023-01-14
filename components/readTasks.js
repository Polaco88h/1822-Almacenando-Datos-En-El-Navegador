import { createTask } from "./addTask.js"                    /** se encarga de leer lo que tenemos en nuestro localStorage */
import { uniqueDates,ordenarDatos } from "../service/date.js";
import dateElement from "./dateElement.js";

/**4 ESTA FUNCION SE MANDA A LLAMR EN CADA EVENTO QUE EXISTE EN NUESTRA PLATAMFORMA 
 * CADA VES QUE CARGA LA PAGINA MUESTRA LAS TAREAS QUE EXISTEN , SI SE AGRGA NUEVA TAREA SE VUELVE A LLAMAR A LA FUNCION*/

export const displayTasks = () => {
    // console.log(uuid.v4())/**aqui acedemos al identificador en la consola */
    const list = document.querySelector("[data-list]");
    const tasksList = JSON.parse(localStorage.getItem("tasks")) || []
    const dates = uniqueDates(tasksList);            /**aca llamamos a la funcion  creada  en dates y le pasamos los datos que tenemos en nuestro localStorage */
   ordenarDatos(dates);
   
    dates.forEach( date => {                          /**recorremos nuestro arreglo */
        const dateMoment = moment(date, "DD/MM/YYYY") /**ACA CREAMOS NUESTRO OBJETO MOMENT */
        list.appendChild(dateElement(date));
        tasksList.forEach((task) => {
            const taskDate = moment(task.dateFormat, "DD/MM/YYYY") /**CREAMOS LA CONSTANTE QUE LO VA A ALMACENAR CON EL FORMATO  */
            // console.log(taskDate) 
            const diff = dateMoment.diff(taskDate)    /**si la fecha es la que aparece arriva ,va a aparecer ahi  */                              /**ACA VEMOS CADA UNAS DE LAS FECHAS QUE EXISTEN */
        if(diff === 0 ){                        /**si la diferencia es igual a 0  */
                list.appendChild(createTask(task))      /** asi obtenemos cada tarea en su respectiva fecha */
           }
           
        })
    })  
   
}
/**forEach = para cada uno de los elementos
 * que exista de mi arreglo quiero que hagas algo
 */

/**entrar al localStorage obtener tasks
esto nos va a regresar un JSON un objeto  para nodotros poderlo manipular le agregamos 
el JSON,parse  || en caso que venga vacio <= por defecto va a 
tener el valor de un arreglo vacio */
