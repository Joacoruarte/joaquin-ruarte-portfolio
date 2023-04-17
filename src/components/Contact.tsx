import React, { useState } from "react";
import Title from "./Title";
import { BsLinkedin, BsWhatsapp, BsGithub } from "react-icons/bs";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import s from "@/styles/Contact.module.css";
import emailJs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

export default function Contact() {
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e.target.name === "email") {
      const emailRegex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!emailRegex.test(e.target.value)) {
        setErrors({
          ...errors,
          [e.target.name]: "Email invalido",
        });
      } else {
        setErrors({
          ...errors,
          [e.target.name]: "",
        });
      }
    }

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (errors.email || errors.name || errors.subject || errors.message) {
      return;
    }
    const API_KEY: string = process.env.API_KEY || "";
    const TEMPLATE_ID: string = process.env.TEMPLATE_ID || "";
    const SERVICE_ID: string = process.env.SERVICE_ID || "";

    const templateParams = {
      subject: form.subject,
      user_name: form.name,
      user_email: form.email,
      message: form.message,
    };
    setLoading(true);
    emailJs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, API_KEY)
      .then(() => {
        setLoading(false);
        toast.success("Mensaje enviado correctamente");
      })
      .catch(() => {
        setLoading(false);
        toast.error("Error al enviar el mensaje, intentelo de nuevo");
      });

    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  }

  return (
    <div id="contact" className={s.container}>
      <Toaster />
      <Title title="Contacto." traduction="/ Contact." />

      <div className={s.methods_of_contact}>
        <form onSubmit={handleSubmit} className={s.form}>
          <div className={s.name_and_emial}>
            <div className={s.animate_label}>
              <input
                type="text"
                id="name"
                value={form.name}
                onChange={handleChange}
                required
                autoComplete="off"
                name="name"
                className={s.input}
              />
              <label htmlFor="name" className={s.label}>
                Nombre
              </label>
            </div>

            <div className={s.animate_label}>
              <input
                type="email"
                id="email"
                value={form.email}
                onChange={handleChange}
                required
                name="email"
                className={s.input}
              />
              <label htmlFor="email" className={s.label}>
                Correo electrónico
              </label>
              {errors.email && <p className={s.error}>{errors.email}</p>}
            </div>
          </div>

          <div className={s.animate_label}>
            <input
              type="text"
              id="subject"
              value={form.subject}
              onChange={handleChange}
              required
              autoComplete="off"
              name="subject"
              className={s.input}
            />
            <label htmlFor="subject" className={s.label}>
              Asunto
            </label>
          </div>

          <div className={s.animate_label}>
            <textarea
              id="message"
              value={form.message}
              required
              onChange={handleChange}
              autoComplete="off"
              style={{ resize: "none" }}
              rows={5}
              name="message"
              className={s.input}
            />
            <label htmlFor="message" className={s.label}>
              Mensaje
            </label>
          </div>

          <button type="submit" className={s.submit_button}>
            {loading ? (
              <AiOutlineLoading3Quarters className={s.loading_icon} />
            ) : (
              "Enviar"
            )}
          </button>
        </form>

        <div className={s.divider} />

        <div className={s.social_media}>
          <h2>Otras formas de contactarme</h2>

          <div className={s.social_media_icons}>
            <a
              aria-label="Linkedin"
              href="https://www.linkedin.com/in/joaquinruartejs/"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin className={s.icon} />
            </a>

            <a
              aria-label="Whatsapp"
              href="https://wa.me/+5492226539525"
              target="_blank"
              rel="noreferrer"
            >
              <BsWhatsapp className={s.icon} />
            </a>

            <a
              aria-label="Github"
              href="https://github.com/Joacoruarte"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub className={s.icon} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
