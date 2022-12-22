import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contato from "./Components/Contato/Contato";
import Produtos from "./Components/Produtos/Produtos";
import Produto from "./Components/Produto/Produto";
import Page404 from "./Components/Page404/Page404";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { ContentContainer } from "./StyleApp";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <ContentContainer>
        <Routes>
          <Route path="/Rotas-React/" element={<Produtos />} />
          <Route path="/Rotas-React/contato" element={<Contato />} />
          <Route path="/Rotas-React/produto/:id" element={<Produto />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </ContentContainer>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
