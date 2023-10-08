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
        <ul className={`${s.list_of_sections} ${active ? s.active : ""}`}>
          <Link href={"#home"}>
            <li onClick={handleClose} className={poppins.className}>
              Home
            </li>
          </Link>
          <Link href={"#projects"}>
            <li onClick={handleClose} className={poppins.className}>
              Projects
            </li>
          </Link>
          <Link href={"#skills"}>
            <li onClick={handleClose} className={poppins.className}>
              Skills
            </li>
          </Link>
          <Link href={"#about"}>
            <li onClick={handleClose} className={poppins.className}>
              About
            </li>
          </Link>
          <Link href={"#contact"}>
            <li onClick={handleClose} className={poppins.className}>
              Contact
            </li>
          </Link>
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
