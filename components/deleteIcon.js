import { displayTasks } from "./readTasks.js";
const deleteIcon = (id) => { /**recibimos nuestro identificador  */
  const i = document.createElement('i');
  i.classList.add('fas', 'fa-trash-alt', 'trashIcon', 'icon');
  i.addEventListener('click', () => deleteTask(id)); /**modificamos nuestro addeventListener */
  return i;
};
/**ACA ELIMINAMOS EL CODIGO QUE TENIAMOS ANTERIORMENTE QUE TENIAMOS EL EVENTO Y CON EL EVENTO 
 * SABIAMOS CUAL ES EL PADRE DEL EVENTO Y ESO LO QUITAMOS
 */

const deleteTask = (id) => {
  const li = document.querySelector("[data-list]") /** 1ACA SELECCIONAMOS LA LISTA QUE ES EL ELEMNTO 
  PADRE DE TODAS LAS TAREAS */
  // lo que hacemos aca es obtener la informacion que tenemos en localStorage
//  JSON.parse : para que podamos trabajar con el objeto
  const tasks = JSON.parse(localStorage.getItem("tasks")) 
  // con el index buscamos el elemento que estamos seleccionando  en que posision esta 
  const index = tasks.findIndex( (item) => item.id == id)/**CONOCEMOS LA POSISION */
  tasks.splice(index,1)/** SACAMOS ESE ELEMENTO OBTENEMOS UN NUEVO ARREGLO */
  console.log(tasks)
  // seleccionamos en el localStorage el elemeNto que borramos pero no se carga la pagina
  li.innerHTML = ""; /**2 ACA ELIMINAMOS SU CONTENIDO QUE TIENE ACTUALMENTE  */
  localStorage.setItem("tasks", JSON.stringify(tasks));/**ACA ACTUALIZAMOS EL LOCALsTORAGE */
  /**findIndex: PAra saber cual es la posicion de nuestro arreglo de nuestra tarea */
  // vemos en la consola la informacion que vive dentro del localStorage
displayTasks();/**3 Y VOLVEMOS  A LLAMAR A LA FUNCION  */
};

export default deleteIcon;

  
