import React from "react";
import s from "@/styles/SoftSkillcard.module.css";
import { Poppins } from "@next/font/google";

interface SoftSkill {
  skill?: string;
}

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "700"],
});

export default function SoftSkillCard({ skill = 'Motivación' }: SoftSkill) {
  return (
    <div className={s.container}>
      <p className={poppins.className}>{skill}</p>
    </div>
  );
}
