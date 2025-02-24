import UpdatePricesForm from "../components/prices/UpdatePricesForm";
import Heading from "../styles/Heading";
import Row from "../styles/Row";

function Prices() {
  return (
    <section>
      <div className="container">
        <Row type="vertical">
          <Heading as="h1">Rate List</Heading>
          <UpdatePricesForm />
        </Row>
      </div>
    </section>
  );
}

export default Prices;
