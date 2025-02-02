import React from "react";
import "../assets/styles/About.scss";
import "../assets/styles/ImageCard.scss";
import ImageCard from "../Components/ImageCard";
import { gallery } from "../utils/gallery";
export default function About() {
  return (
    <main className="about-us">
      <h2 className="BigTitle">
        SOBRE <span>NOSOTROS</span>
      </h2>
      <p className="aboutus--text">
        Somos una empresa enfocada en generar y fortalecer la
        <span> salud emocional</span> y cognitiva a través de la
        <span> reestructuración de hábitos</span>. Proporcionamos herramientas
        que permiten, a través del autoconocimiento, explotar el potencial de cada
        ser humano mediante el diagnóstico, diseño, coordinación y ejecución
        de programas de intervención. Tenemos <span>15 años</span> de
        experiencia y desde la psicología clínica hemos aprendido la importancia
        de la salud emocional y cómo de esta, depende el comportamiento y
        desarrollo de las personas en diferentes contextos; logramos
        evidenciar que con la aceptación de quienes somos, se
        logra un crecimiento y fortalecimiento de los <span>potenciales</span> en el momento que se aceptan realidades. 
        De esta forma, se evidencia un mejoramiento de la calidad de vida.
      </p>
      <br />
      <div className="Gallery">
        {gallery.map((photo) => {
          return <ImageCard {...photo} />;
        })}
        <br />
      </div>
      <p className="about aboutus--text">
        Contamos con un equipo interdisciplinario con profesionales
        especializados en diversas disciplinas como{" "}
        <span>
          Piscología clínica, Coachs certificados, especialistas en salud
          ocupacional, psicoterapeutas, ingenieros en diseño y educación. 
        </span>
        , todos al frente del diseño, el coach, la salud y la ingeniería que se
        necesitan para la creación de programas con las bases necesarias para
        potencializar las cualidades del individuo para sí mismo y la
        organización. Nuestros programas
        poseen dentro de sus etapas de planeación, un ajuste a las necesidades
        tanto individuales como organizacionales, una etapa de medición y
        control a través de indicadores validables como
        los rasgos, atributos y/o variables que se deben tener en cuenta para
        alcanzar los objetivos de un programa, ya sea la mejora de
        hábitos en función de la calidad de vida o la exploración y el
        fortalecimiento de equipos de trabajo o la educación para el trabajo en equipo y la comuncación asertiva. 
      </p>
    </main>
  );
}
