import React from "react";
import EntradaTarea from "./EntradaTarea.jsx";
import ListaTareas  from "./ListaTareas.jsx";
import BotonLimpiar from "./BotonLimpiar.jsx";
import Footer       from "./Footer.jsx";


function TodoApp({ tareas, onAgregar, onEliminar, onLimpiar }) {
  return (
    <div className="todo-container">
      <h1 className="titulo">todos</h1>
      <div className="lista-container shadow-sm rounded-0">
        <EntradaTarea onAgregar={onAgregar} />
        <ListaTareas  tareas={tareas} onEliminar={onEliminar} />
        <BotonLimpiar onLimpiar={onLimpiar} />
        <Footer cantidad={tareas.length} />
      </div>
    </div>
  );
}

export default TodoApp;
