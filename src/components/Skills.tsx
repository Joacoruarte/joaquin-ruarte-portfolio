import React from "react";
import s from "@/styles/Skills.module.css";
import Title from "./Title";
import { Poppins } from "next/font/google";
import { useNearScreen } from "@/hooks/useNearScreen";
import SkillCard from "./SkillCard";
import Image from "next/image";
import { skills } from "@/utils/skills";
import { Skill } from "@/interfaces";
import SoftSkillCard from "./SoftSkillCard";

interface CustomStyles {
  "--d": string;
}

export default function Skills() {
  const [show, spanRef] = useNearScreen<HTMLSpanElement>();

  return (
    <div id="skills" className={s.container}>
      <Title title="Habilidades." traduction={"/ Skills."} />

      <div className={s.container_skills}>
        {/* TECH SKILLS */}
        <div className={s.skills}>
          <h2 className={s.title}>Técnicas</h2>
          <p className={s.paragraph}>
            <span
              ref={spanRef as React.RefObject<HTMLSpanElement>}
              id={show ? s.reveal : ""}
              style={{ "--d": "0.6s" } as CustomStyles & React.CSSProperties}
            >
              Estos son mis principales lenguajes, tecnologías y herramientas <br /> 
              en los cuales pude desarrollar a lo largo de mi carrera <br /> 
              profesional como desarrollador de web.
            </span>
          </p>
          <div className={s.box_skills}>
            <h2>Frontend</h2>
            <div className={s.box_skills_list}>
              {skills.frontEnd.map((skill: Skill) => (
                <SkillCard
                  src={skill.image}
                  name={skill.skill}
                  key={skill.skill}
                />
              ))}
            </div>
            <h2>Backend</h2>
            <div className={s.box_skills_list}>
              {skills.backEnd.map((skill: Skill) => (
                <SkillCard
                  src={skill.image}
                  name={skill.skill}
                  key={skill.skill}
                />
              ))}
            </div>
          </div>
        </div>
        <div className={s.soft_skills}>
          <h2 className={s.title}>Blandas</h2>
          <p className={s.paragraph}>
            <span
              id={show ? s.reveal : ""}
              style={{ "--d": "0.6s" } as CustomStyles & React.CSSProperties}
            >
              Durante mi carrera profesional, he obtenido una variedad de
              habilidades que me permiten enfrentar cualquier desafío con
              confianza. Desde la capacidad para trabajar en equipo y liderar
              proyectos, hasta ser proactivo y responsable. Estas habilidades me
              permiten añadir valor a cualquier proyecto o equipo.
            </span>
          </p>
          <div className={s.box_skills}>
            <h2>Habilidades blandas</h2>

            <div className={s.container_soft_skills}>
              {skills.softs.map((skill) => (
                <SoftSkillCard key={skill} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
