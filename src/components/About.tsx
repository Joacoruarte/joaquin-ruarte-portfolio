import React from "react";
import Title from "./Title";
import s from "@/styles/About.module.css";

export default function About() {
  return (
    <div id="about">
      <Title title="Sobre mí." traduction="/ About." />

      <div className={s.paragraphs}>
        <p className={s.text}>
          Mi nombre es Joaquín Ruarte, soy desarrollador full-stack con un año
          de experiencia en el area. Actualmente, me desempeño como
          desarrollador front-end en mi trabajo actual, aunque tengo habilidades
          y conocimientos en el desarrollo back-end y en otras tecnologías.
        </p>

        <p className={s.text}>
          En el 2022, tuve la oportunidad de estudiar en el bootcamp Soy Henry,
          donde adquirí habilidades en el desarrollo de aplicaciones web
          utilizando tecnologías como HTML, CSS, JavaScript, React, Node.js,
          entre otras. Desde entonces, he complementado mi formación académica
          con varios cursos en línea, lo que me ha permitido ampliar mi
          conocimiento y mantenerme actualizado en las últimas tendencias del
          mercado.
        </p>

        <p className={s.text}>
          Como desarrollador, me encanta enfrentar nuevos desafíos y aprender
          constantemente para mejorar mis habilidades y conocimientos. Creo que
          esto es lo que me ha permitido crecer en mi carrera en un corto
          periodo de tiempo.
        </p>

        <p className={s.text}>
          En mi trabajo actual, he tenido la oportunidad de trabajar en
          proyectos completos, desde la definición de la arquitectura hasta la
          implementación y puesta en producción. Me siento muy orgulloso de
          haber participado en proyectos innovadores que han logrado impactar
          positivamente a los usuarios finales.
        </p>
      </div>
    </div>
  );
}
