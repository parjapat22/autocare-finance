import { usePrices } from "./usePrices";
import PriceRow from "./PriceRow";
import AddPriceItem from "./AddPriceItem";

import Table from "../../styles/Table";
import Spinner from "../../styles/Spinner";

// 1. fetch data from database - see services/apiCustomers.js
// 2. display data on interface
function PricesTable() {
  const { isLoading, error, items } = usePrices();

  if (isLoading) return <Spinner />;

  return (
    <>
      <Table role="table">
        <Table.Header>
          <Table.Row>
            <Table.Th>Item Name</Table.Th>
            <Table.Th>Description</Table.Th>
            <Table.Th>Unit Price</Table.Th>
            <Table.Th>Notes</Table.Th>
            <Table.Th>Actions</Table.Th>
          </Table.Row>
        </Table.Header>

        <Table.Body
          data={items}
          render={(item) => <PriceRow item={item} key={item.id} />}
        />
      </Table>

      <AddPriceItem />
    </>
  );
}

export default PricesTable;
