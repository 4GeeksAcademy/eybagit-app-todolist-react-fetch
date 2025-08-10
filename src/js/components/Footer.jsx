import React from "react";

function Footer(props) {
  return (
    <div className="footer">
      <span>
        {props.cantidad} tarea{props.cantidad !== 1 ? "s" : ""}{" "}
        restante{props.cantidad !== 1 ? "s" : ""}
      </span>
    </div>
  );
}

export default Footer;
