import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Loading from "../Loading/Loading";
import Head from "../Head/Head";
import { ContainerProdutos, ImgProdutos, NomeProduto } from "./StyleProdutos";

const Produtos = () => {
  const { dados, loading, error } = useFetch(
    "https://ranekapi.origamid.dev/json/api/produto"
  );
  if (error) return <p>{error}</p>;
  return (
    <>
      <Head title="Ranek" />
      <ContainerProdutos anime>
        {loading && dados === null && <Loading />}
        {dados !== null &&
          dados.map(({ id, fotos, nome }) => (
            <Link
              key={id}
              to={"/React-Rotas/produto/" + id}
              style={{ textDecoration: "none", color: "black" }}
            >
              <ImgProdutos src={fotos[0].src} />
              <NomeProduto>{nome}</NomeProduto>
            </Link>
          ))}
      </ContainerProdutos>
    </>
  );
};

export default Produtos;
