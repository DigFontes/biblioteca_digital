import "./style.css";
import Logo from "../Logo";
import OpcoesHeader from "../OpcoesHeader";
import IconesHeader from "../IconeHeader";

function Header() {
  return (
    <header className="App-header">
      <Logo />
      <OpcoesHeader />
      <IconesHeader />
    </header>
  );
}

export default Header;
