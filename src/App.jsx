import GlobalStyles from "./styles/GlobalStyles";
import Heading from "./styles/Heading";

function App() {
  return (
    <>
      <GlobalStyles />

      <section>
        <div>
          <Heading as="h1">Autocare Finance</Heading>
          <Heading as="h2">This is heading 2</Heading>
        </div>
      </section>
    </>
  );
}

export default App;
