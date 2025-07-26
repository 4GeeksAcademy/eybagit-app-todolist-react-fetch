import React from "react";

function BotonLimpiar({ onLimpiar }) {
  return (
    <button
      type="button"
      className="btn btn-limpiar-personalizado mt-3"
      onClick={onLimpiar}
    >
      Limpiar todas las tareas
    </button>
  );
}

export default BotonLimpiar;
