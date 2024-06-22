import logo from "../../imgs/logo.svg";
import styled from "styled-components";

const LogoContainer = styled.div`
  display: flex;
  font-size: 30px;
`;

const LogoImage = styled.img`
  margin: 0 10px 0 0;
`;

function Logo() {
  return (
    <LogoContainer>
      <LogoImage src={logo} alt="logo" className="logo-img"></LogoImage>
      <p>
        <strong>Alura</strong> Books
      </p>
    </LogoContainer>
  );
}

export default Logo;
