export const uniqueDates = (tasks) => {
    const unique = [] 

    tasks.forEach(task => {if (!unique.includes(task.dateFormat))unique.push(task.dateFormat);
       
});

return unique;  
}
/**exportamos y creamos la constante ordenar datos con un arrowfunction */
/**y RETORNAMOS LOS DATOS.SORT que lo que hace es ordenar los elementos de un arreglo de menor a mayor */
export const ordenarDatos = (dates) => {
    return dates.sort((a,b) => {
        const primeraFecha = moment(a, "DD/MM/YYYY") /**con esto hacemos la comparacion de las fechas (a,b) */
        const segundaFecha = moment(b, "DD/MM/YYYY")
       return primeraFecha - segundaFecha;
    })
}

 /**con todo este if le estamos preguntando si existe! No si no existe? */
 /**si ya existe la fecha que estamos viendo en el forEach */    
   /**para eso le agregamos el signo de exclamacion  */
/**si no lo llamamos con el console lo tenemos que retornar */

   /** console.log(tasks)con esto tenemos las tareas en la consola */

   /**aca creamos una constante para guardar esas tareas */
/**y como nuestra estructura es un areeglo podemos recorrerlo con un forEach(por cada uno) */
    
 /** si no existe dentro de nuestro arreglo (task.dateFormat! lo agragamos y si existe no va a hacer nada  ) */

        /**el dateFormat es para acceder a cada 
        una de las fechas que tiene cada tarea */
     
   
    // console.log(unique);

/**con esto se ve en la consola a las fechas que no se repiten */
// esto es para que las fechas no se repitan 