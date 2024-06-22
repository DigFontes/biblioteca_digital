import Input from "../Input";

import { useState } from "react";
import { livros } from "./dadosPesquisa";
import { PesquisaContainer } from "./PesquisaContainer";
import { LivrosContainer } from "./LivrosContainer";
import { LivroPesquisa } from "./Livro";
import { TituloPesquisa } from "./Titulo";
import { SubTituloPesquisa } from "./SubTitulo";

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
      <TituloPesquisa>Já sabe por onde começar?</TituloPesquisa>
      <SubTituloPesquisa>Pesquise pelo seu livro</SubTituloPesquisa>
      <Input
        placeholder="Escreva sua próxima leitura"
        onKeyDown={handleKeyDown}
      />
      <LivrosContainer>
        {livrosPesquisados.map((livro) => (
          <LivroPesquisa key={livro.nome}>
            <p>{livro.nome}</p>
            <img
              src={livro.src}
              alt={`Capa do Livro ${livro.nome}`}
              style={{ width: "100%", height: "auto" }}
            />
          </LivroPesquisa>
        ))}
      </LivrosContainer>
    </PesquisaContainer>
  );
}

export default Persquisa;
