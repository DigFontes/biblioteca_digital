import Input from "../Input";
import styled from "styled-components";
import { useState } from "react";
import { livros } from "./dadosPesquisa";

const PesquisaContainer = styled.section`
  background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
  color: #fff;
  text-align: center;
  padding: 85px 0;
  height: 270px;
  width: 100%;
`;

const Titulo = styled.h2`
  color: #fff;
  font-size: 36px;
  text-align: center;
  width: 100%;
`;

const SubTitulo = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
`;

function Persquisa() {
  const [livrosPesquisados, setLivrosPesquisados] = useState([]);
  const handleKeyDown = (evento) => {
    if (evento.key === "Enter") {
      const textoDigitado = evento.target.value;
      const resultadoPesquisa = livros.filter((livro) =>
        livro.nome.includes(textoDigitado)
      );
      setLivrosPesquisados(resultadoPesquisa);
    }
  };

  return (
    <PesquisaContainer>
      <Titulo>Já sabe por onde começar?</Titulo>
      <SubTitulo>Pesquise pelo seu livro</SubTitulo>
      <Input
        placeholder="Escreva sua próxima leitura"
        onKeyDown={handleKeyDown}
      />
      {livrosPesquisados.map((livro) => (
        <div>
          <p>{livro.nome}</p>
          <img src={livro.src} alt={`Capa do Livro ${livro.nome}`} />
        </div>
      ))}
    </PesquisaContainer>
  );
}

export default Persquisa;
