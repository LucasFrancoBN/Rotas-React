import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Loading from "../Loading/Loading";
import Head from "../Head/Head";
import {
  ContainerProduto,
  Img,
  DescWrapper,
  TituloProduto,
  PrecoProduto,
} from "./StyleProduto";

const Produto = () => {
  const params = useParams();
  const { dados, loading, error } = useFetch(
    `https://ranekapi.origamid.dev/json/api/produto/${params.id}`
  );

  if (error) return <p>{error}</p>;

  if (loading && dados === null)
    return (
      <>
        <ContainerProduto>
          <Loading />
        </ContainerProduto>
      </>
    );
  else if (dados)
    return (
      <>
        <Head title={`Ranek | ${dados.nome}`} />
        <ContainerProduto anime>
          <Img src={dados.fotos[0].src} alt="" />
          <DescWrapper>
            <TituloProduto>{dados.nome}</TituloProduto>
            <PrecoProduto>R$ {dados.preco}</PrecoProduto>
            <p>{dados.descricao}</p>
          </DescWrapper>
          {dados.fotos[1] && <Img src={dados.fotos[1].src} alt="" />}
        </ContainerProduto>
      </>
    );
};

export default Produto;
