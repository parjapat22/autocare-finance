import { useInvoices } from "./useInvoices";

import InvoiceRow from "./InvoiceRow";

import Table from "../../styles/Table";
import Spinner from "../../styles/Spinner";

function InvoicesTable() {
  const { isLoading, error, invoices } = useInvoices();

  if (isLoading) return <Spinner />;

  return (
    <>
      <Table role="table">
        <Table.Header>
          <Table.Row>
            <Table.Th>Invoice Number</Table.Th>
            <Table.Th>Invoice Date</Table.Th>
            <Table.Th>Vehicle</Table.Th>
            <Table.Th>Rego</Table.Th>
            <Table.Th>Customer Name</Table.Th>
            <Table.Th>Amount</Table.Th>
            <Table.Th>Payment Status</Table.Th>
            <Table.Th>Notes</Table.Th>
            <Table.Th>Actions</Table.Th>
          </Table.Row>
        </Table.Header>

        <Table.Body
          data={invoices}
          render={(invoice) => (
            <InvoiceRow invoice={invoice} key={invoice.id} />
          )}
        />
      </Table>
    </>
  );
}

export default InvoicesTable;
