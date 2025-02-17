import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";

const H1 = styled.h1`
  font-size: 4rem;
  color: red;
`;

function App() {
  return (
    <>
      <GlobalStyles />

      <section>
        <div>
          <H1>Autocare Finance</H1>
        </div>
      </section>
    </>
  );
}

export default App;
