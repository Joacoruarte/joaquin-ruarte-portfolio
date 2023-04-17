import React from "react";
import s from "@/styles/Introduction.module.css";

export default function Introduction() {
  return (
    <div id="home" className={s.container_introduction}>
      <div>
        <span>
          Hola, yo soy
          <br />
        </span>
        <span>
          Joaquin Ruarte <br />
        </span>

        <span>Desarrollador Web</span>
        <div className={s.divider} />
        <p>Mi portafolio</p>
      </div>
    </div>
  );
}
