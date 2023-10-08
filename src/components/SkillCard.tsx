import React from "react";
import s from "@/styles/SkillCard.module.css";
import Image from "next/image";
import { Poppins } from "next/font/google";

interface SkillCardProps {
  src: string;
  name: string;
}

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "700"],
});
  

export default function SkillCard({ src, name }: SkillCardProps) {
  return (
    <div className={s.container_skill_card}>
      <Image
        src={`/${src}`}
        className={name === "Next.Js" ? s.img_next_edit : ""}
        alt={name}
        width={100}
        height={100}
      />
      <p className={poppins.className}>{name}</p>
    </div>
  );
}
