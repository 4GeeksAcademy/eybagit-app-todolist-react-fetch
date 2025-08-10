import React from "react";
import TodoApp from "./TodoApp.jsx";
import useTareasApi from "../hooks/useTareasApi.jsx";

function Home() {
  const { tareas, agregarTarea, eliminarTarea, limpiarTareas } =
    useTareasApi();

  return (
    <main>
      <section>
        <TodoApp
          tareas={tareas}
          onAgregar={agregarTarea}
          onEliminar={eliminarTarea}
          onLimpiar={limpiarTareas}
        />
      </section>
    </main>
  );
}

export default Home;
