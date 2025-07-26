import React from "react";

function Tarea({ tarea, onEliminar }) {
  return (
    <li className="list-group-item">
      {tarea.label}
      <button
        className="btn-eliminar"
        onClick={() => onEliminar(tarea.id)}
      >
        ×
      </button>
    </li>
  );
}

export default Tarea;
