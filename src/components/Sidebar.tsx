import React, { useState } from "react";
import s from "@/styles/Sidebar.module.css";
import { Manrope, Poppins } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const marope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "700"],
});

export default function Sidebar() {
  const [active, setActive] = useState(false);

  const handleClose = () => window.innerWidth <= 768 && setActive(false);

  return (
    <>
      <div className={s.container}>
        <Image
          src={"/logo.png"}
          className={s.logo}
          width={95}
          height={95}
          alt="Logo"
          priority
        />
        <ul className={`${s.list_of_sections} ${active ? s.active : ""}`}>
          <li onClick={handleClose} className={poppins.className}>
            <Link href={"#home"}>Home</Link>
          </li>
          <li onClick={handleClose} className={poppins.className}>
            <Link href={"#projects"}>Projects</Link>
          </li>
          <li onClick={handleClose} className={poppins.className}>
            <Link href={"#skills"}>Skills</Link>
          </li>
          <li onClick={handleClose} className={poppins.className}>
            <Link href={"#about"}>About</Link>
          </li>
          <li onClick={handleClose} className={poppins.className}>
            <Link href={"#contact"}>Contact</Link>
          </li>
        </ul>
        <div
          onClick={() => setActive(!active)}
          className={`${s.hamburger_lines} ${active ? s.active : ""}`}
        >
          <span className={`${s.line} ${s.line1}`}></span>
          <span className={`${s.line} ${s.line2}`}></span>
          <span className={`${s.line} ${s.line3}`}></span>
        </div>
      </div>

      <div className={s.left_width} />
    </>
  );
}
