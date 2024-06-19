import "./style.css";

const textoOpcoes = ["CATEGORIAS", "MINHA ESTANTE", "CATEGORIAS"];

function OpcoesHeader() {
  return (
    <ul className="opcoes">
      {textoOpcoes.map((texto) => (
        <li className="opcao">
          <p>{texto}</p>
        </li>
      ))}
    </ul>
  );
}

export default OpcoesHeader;
