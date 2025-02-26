import { useForm } from "react-hook-form";

import { useAddPrice } from "./useAddPrice";
import { useUpdatePrice } from "./useUpdatePrice";

import Form from "../../styles/Form";
import FormRow from "../../styles/FormRow";
import Input from "../../styles/Input";
import Textarea from "../../styles/Textarea";
import Button from "../../styles/Button";

// useForm hook
// 1. register the input fields
// 2. add onSubmit function to form element
// 3. useMutation hook to handle the form data
// 4. useQueryClient to validate the query and success / error state
// 5. reset the input fields
// 6. use formState to handle the errors

// onCloseModal is coming from Modal.jsx
function NewPriceItemForm({ priceToEdit = {}, onCloseModal }) {
  // custom hooks
  const { isAdding, addPrice } = useAddPrice();
  const { isUpdating, updatePrice } = useUpdatePrice();

  const { id: editId, ...editValues } = priceToEdit;
  const isEditSession = Boolean(editId);

  // getValues gives current field value (same as event.target.value)
  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });
  const { errors } = formState;

  function onSubmit(data) {
    if (isEditSession) {
      updatePrice(
        { ...data, id: editId },

        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        }
      );
    } else {
      addPrice(data, {
        onSuccess: () => {
          reset();
          onCloseModal?.();
        },
      });
    }
  }

  function onError(errors) {
    // console.log(errors);
    // errors are handled using hook inbuilt formState
    // formState is an alternate way to handle errors
  }

  return (
    <Form
      type={onCloseModal ? "modal" : "regular"}
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <FormRow label="Item name" error={errors?.itemName?.message}>
        <Input
          type="text"
          id="itemName"
          disabled={isAdding || isUpdating}
          {...register("itemName", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow label="Description" error={errors?.description?.message}>
        <Textarea
          type="text"
          id="description"
          disabled={isAdding || isUpdating}
          {...register("description", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow label="Unit Price" error={errors?.unitPrice?.message}>
        <Input
          type="text"
          id="unitPrice"
          disabled={isAdding || isUpdating}
          {...register("unitPrice", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow label="Notes" error={errors?.notes?.message}>
        <Input
          type="text"
          id="notes"
          disabled={isAdding || isUpdating}
          {...register("notes")}
        />
      </FormRow>

      <FormRow>
        {/* type = "reset" is an HTML attribute! */}
        <Button
          $size="medium"
          $variation="secondary"
          type="reset"
          disabled={isAdding || isUpdating}
          onClick={() => onCloseModal?.()}
        >
          Cancel
        </Button>

        <Button
          $size="medium"
          $variation="primary"
          disabled={isAdding || isUpdating}
        >
          {isEditSession ? "Edit item" : "Add item"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default NewPriceItemForm;
