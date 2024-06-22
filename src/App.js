import Header from "./componentes/Header";
import Persquisa from "./componentes/Pesquisa";
import UltimosLancamentos from "./componentes/UltimosLacnamentos";
import { AppContainer } from "./componentes/AppContainer";

function App() {
  return (
    <AppContainer>
      <Header />
      <Persquisa />
      <UltimosLancamentos />
    </AppContainer>
  );
}

export default App;
