import { livros } from "./dadosUltimosLancamentos";
import { Titulo } from "../Titulo";
import { UltimosLancamentosContainer } from "./UltimosLancamentosContainer";
import { NovosLivrosContainer } from "./NovoslivrosContainer";
import CardRecomenda from "../CardRecomenda";
import imagemLivro from "../../imgs/livro2.png";

function UltimosLancamentos() {
  return (
    <UltimosLancamentosContainer>
      <Titulo tamanhoFonte="36px" alinhamento="center">
        Últimos Lançamentos
      </Titulo>

      <NovosLivrosContainer>
        {livros.map((livro) => (
          <img src={livro.src} />
        ))}
      </NovosLivrosContainer>

      <CardRecomenda
        titulo="Talvez você se interesse por"
        subtitulo="Angular 11"
        descricao="Construindo uma aplicação com a plataforma Google"
        img={imagemLivro}
      />
    </UltimosLancamentosContainer>
  );
}

export default UltimosLancamentos;
