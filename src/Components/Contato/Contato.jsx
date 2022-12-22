import React from "react";
import Head from "../Head/Head";
import {
  ContainerContato,
  ContatoDesc,
  ContatoImg,
  ContatoTitulo,
  ContContato,
} from "./StyleContato";
import foto from "/img/contato.jpg";

const Contato = () => {
  return (
    <>
      <Head title="Ranek | Contato" />
      <ContainerContato anime>
        <ContatoImg src={foto} />
        <ContatoDesc>
          <ContatoTitulo>Entre em contato</ContatoTitulo>
          <ContContato>suporte@ranek.com</ContContato>
          <ContContato>99999-9999</ContContato>
          <ContContato>Rua Ali Perto, 985</ContContato>
        </ContatoDesc>
      </ContainerContato>
    </>
  );
};

export default Contato;
