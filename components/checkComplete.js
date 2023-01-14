const checkComplete = (id) => {
  const i = document.createElement('i');
  i.classList.add('far', 'fa-check-square', 'icon');
  i.addEventListener('click', (event) => completeTask(event,id));
  return i;
}
// Immediately invoked function expression IIFE
const completeTask = (event,id) => {
  const element = event.target;
  element.classList.toggle('fas');
  element.classList.toggle('completeIcon');
  element.classList.toggle('far');
  // console.log("chek id", id);
  const tasks =JSON.parse(localStorage.getItem("tasks"))
  
  const index = tasks.findIndex((item) => item.id == id);/**acceder en que posicion esta nuestro arreglo */
  // console.log(index);
  tasks[index]["complete"]=!tasks[index]["complete"]/** aca lo negamos para convertirlo en true 
  y en caso de que sea true lo convierte en false */
  // console.log(tasks);
localStorage.setItem("tasks", JSON.stringify(tasks));/**aca una ves modificado el arreglo lo almacenamos de nuevo en nuestro localStorage  */
};

export default checkComplete;
