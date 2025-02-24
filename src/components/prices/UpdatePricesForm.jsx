import { usePrices } from "./usePrices";

import Form from "../../styles/Form";
import FormRow from "../../styles/FormRow";
import Input from "../../styles/Input";
import Spinner from "../../styles/Spinner";

function UpdatePricesForm() {
  const {
    isLoading,
    error,
    prices: { itemName, itemDescription, unitPrice } = {},
  } = usePrices();

  if (isLoading) return <Spinner />;

  return (
    <Form type="regular">
      <FormRow label="Item Name">
        <Input type="text" id="itemName" defaultValue={itemName} />
      </FormRow>

      <FormRow label="Item Description">
        <Input
          type="text"
          id="itemDescription"
          defaultValue={itemDescription}
        />
      </FormRow>

      <FormRow label="Unit Price">
        <Input type="number" id="unitPrice" defaultValue={unitPrice} />
      </FormRow>
    </Form>
  );
}

export default UpdatePricesForm;
