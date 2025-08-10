import { useState, useEffect } from "react";

const API_BASE = "https://playground.4geeks.com/todo";
const USUARIO  = "eybagit";

 function useTareasApi() {
  const [tareas, setTareas] = useState([]);


  function sincronizarTareas() {
    return fetch(`${API_BASE}/users/${USUARIO}`)
      .then(respuesta => respuesta.json())           
      .then(data => setTareas(data.todos)) 
      .catch(error => console.error("obtenerTareasApi:", error)); 
  }

  
  useEffect(() => {
    fetch(`${API_BASE}/users/${USUARIO}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify([])
    })
      .then(respuesta => respuesta.json())          
      .then(() => sincronizarTareas())   
      .catch(error => console.error("crearUsuarioApi:", error));
  }, []);

  
  function agregarTarea(label) {
    fetch(`${API_BASE}/todos/${USUARIO}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ label, done: false })
    })
      .then(respuesta => respuesta.json())         
      .then(() => sincronizarTareas())    
      .catch(error => console.error("agregarTareaApi:", error));
  }


  function eliminarTarea(id) {
    fetch(`${API_BASE}/todos/${id}`, { method: "DELETE" })
      //.then(respuesta => respuesta.json())  error de carga       
      .then(() => sincronizarTareas())    
      .catch(error => console.error("eliminarTareaApi:", error)); 
  }

  function limpiarTareas() {
    fetch(`${API_BASE}/users/${USUARIO}`)
      .then(respuesta => respuesta.json())        
      .then(data =>
        Promise.all(
          data.todos.map(tarea =>
            fetch(`${API_BASE}/todos/${tarea.id}`, { method: "DELETE" })
              .then(respuesta => respuesta.json())         
              .then(() => {})            
              .catch(error => console.error("eliminarTareaApi:", error))
          )
        )
      )
      .then(() => setTareas([]))      
      .catch(error => console.error("limpiarTareas:", error));
  }

  return {
    tareas,
    agregarTarea,
    eliminarTarea,
    limpiarTareas
  };
}


export default useTareasApi;

//Actualizado