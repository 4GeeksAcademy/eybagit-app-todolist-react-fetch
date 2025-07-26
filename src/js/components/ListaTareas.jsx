import React from "react";
import Tarea from "./Tarea.jsx";

function ListaTareas({ tareas, onEliminar }) {
  return (
    <ul className="list-group list-group-flush">
      {tareas.map((tarea) => (
        <Tarea key={tarea.id} tarea={tarea} onEliminar={onEliminar} />
      ))}
    </ul>
  );
}

export default ListaTareas;
