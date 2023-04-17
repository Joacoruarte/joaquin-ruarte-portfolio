import React, { RefObject, useEffect, useRef } from "react";
import s from "@/styles/Projects.module.css";
import CardProject from "./CardProject";
import { projects } from "@/utils/projects";
import Title from "./Title";

export default function Projects() {
  return (
    <div id="projects" style={{ width: "100%" }}>
      <Title title="Projectos." traduction="/ Projects." />

      <div className={s.projects}>
        {projects.map((project, index) => (
          <CardProject key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
