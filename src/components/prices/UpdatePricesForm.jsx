import { usePrices } from "./usePrices";
import { useUpdatePrice } from "./useUpdatePrice";

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

  const { isUpdating, updatePrice } = useUpdatePrice();

  // if (isLoading) return <Spinner />;

  function handleUpdate(e, fieldName) {
    const { value } = e.target;

    if (!value) return;

    updatePrice({ [fieldName]: value });
  }

  return (
    <Form type="regular">
      <FormRow label="Item Name">
        <Input
          type="text"
          id="itemName"
          defaultValue={itemName}
          disabled={isUpdating}
          // pass field name along with e
          // field name can be anything
          onBlur={(e) => handleUpdate(e, "itemName")}
        />
      </FormRow>

      <FormRow label="Item Description">
        <Input
          type="text"
          id="itemDescription"
          defaultValue={itemDescription}
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, "itemDescription")}
        />
      </FormRow>

      <FormRow label="Unit Price">
        <Input
          type="number"
          id="unitPrice"
          defaultValue={unitPrice}
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, "unitPrice")}
        />
      </FormRow>
    </Form>
  );
}

export default UpdatePricesForm;
