import { useNearScreen } from "@/hooks/useNearScreen";
import { CardProjectProps } from "@/interfaces";
import s from "@/styles/CardProject.module.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Image from "next/image";
import { RefObject, useState } from "react";

export default function CardProject({
  title,
  subtitle,
  img,
  description,
  deploy,
}: CardProjectProps) {
  const [showModal, setShowModal] = useState(false);
  const [show, elementRef] = useNearScreen<HTMLDivElement>();

  const handelClick = (e: any) => {
    e.stopPropagation();
    if (title === "Marvel app") {
      setShowModal(!showModal);
    } else {
      window.open(deploy, "_blank");
    }
  };

  return (
    <>
      <div
        ref={elementRef as RefObject<HTMLDivElement>}
        className={`${s.container} ${show ? s.show : ""}`}
      >
        <div className={`${s.card}`} onClick={handelClick}>
          <h2>{title}</h2>
          <p>{subtitle}</p>
          <div className={s.container_img}>
            <Image
              priority
              className={s.img}
              src={img}
              fill
              alt="Foto de un projecto"
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            />
          </div>
          <p dangerouslySetInnerHTML={{__html: description}}/>
        </div>
      </div>

      {title === "Marvel app" && (
        <Modal
          open={showModal}
          onClose={() => setShowModal(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className={s.boxModal}>
            <div className={s.containerMarvelModal}>
              <Image
                width={100}
                height={100}
                alt="marvel logo"
                src={"/Marvel-Comics-logo.png"}
              />
            </div>
            <video src={"/Marvel-app.mov"} controls className={s.videoPlayer} />
            <div className={s.containerInfoModal}>
              <h2>Marvel app</h2>
              <p>
                App creada con React Native , consumiendo la API de Marvel.
                <br />
                Features del proyecto: listado de personajes , detalle
                individual , comics en los que aparece cada personaje, un barra
                de busqueda de personajes, y seccion de favoritos.
              </p>
            </div>
          </Box>
        </Modal>
      )}
    </>
  );
}
