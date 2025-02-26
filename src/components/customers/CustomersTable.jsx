import { useCustomers } from "./useCustomers";
import CustomerRow from "./CustomerRow";
import AddCustomer from "./AddCustomer";

import Table from "../../styles/Table";
import Spinner from "../../styles/Spinner";

// 1. fetch data from database - see services/apiCustomers.js
// 2. display data on interface
function CustomersTable() {
  // moved to custom hook - useCustomers.js
  // const {
  //   isLoading,
  //   data: customers,
  //   error,
  // } = useQuery({
  //   queryKey: ["customers"],
  //   queryFn: getCustomers,
  // });

  const { isLoading, error, customers } = useCustomers();

  if (isLoading) return <Spinner />;

  return (
    <>
      <Table role="table">
        <Table.Header>
          <Table.Row>
            <Table.Th>Name</Table.Th>
            <Table.Th>Mobile</Table.Th>
            <Table.Th>Email</Table.Th>
            <Table.Th>Address</Table.Th>
            <Table.Th>City</Table.Th>
            <Table.Th>Postcode</Table.Th>
            <Table.Th>Invoice</Table.Th>
            <Table.Th>Notes</Table.Th>
            <Table.Th>Actions</Table.Th>
          </Table.Row>
        </Table.Header>

        <Table.Body
          data={customers}
          render={(customer) => (
            <CustomerRow customer={customer} key={customer.id} />
          )}
        />
      </Table>

      {/* add new customer button */}
      <AddCustomer />
    </>
  );
}

export default CustomersTable;
