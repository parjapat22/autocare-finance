import { useForm } from "react-hook-form";

import { useAddCustomer } from "./useAddCustomer";
import { useEditCustomer } from "./useEditCustomer";

import Form from "../../styles/Form";
import FormRow from "../../styles/FormRow";
import Input from "../../styles/Input";
import Textarea from "../../styles/Textarea";
import FileInput from "../../styles/FileInput";
import Button from "../../styles/Button";

// useForm hook
// 1. register the input fields
// 2. add onSubmit function to form element
// 3. useMutation hook to handle the form data
// 4. useQueryClient to validate the query and success / error state
// 5. reset the input fields
// 6. use formState to handle the errors

function NewCustomerForm({ customerToEdit = {}, onCloseModal }) {
  // custom hooks
  const { isAdding, addCustomer } = useAddCustomer();
  const { isEditing, editCustomer } = useEditCustomer();

  const { id: editId, ...editValues } = customerToEdit;
  const isEditSession = Boolean(editId);

  // getValues gives current field value (same as event.target.value)
  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });
  const { errors } = formState;

  function onSubmit(data) {
    if (isEditSession) {
      editCustomer(
        { ...data, id: editId },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        }
      );
    } else {
      addCustomer(data, {
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
      <FormRow label="Customer name" error={errors?.fullName?.message}>
        <Input
          type="text"
          id="fullName"
          disabled={isAdding || isEditing}
          {...register("fullName", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow label="Mobile" error={errors?.mobile?.message}>
        <Input
          type="number"
          id="mobile"
          disabled={isAdding || isEditing}
          {...register("mobile", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow label="Email" error={errors?.email?.message}>
        <Input
          type="text"
          id="email"
          disabled={isAdding || isEditing}
          {...register("email", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow label="Address" error={errors?.address?.message}>
        <Textarea
          type="text"
          id="address"
          disabled={isAdding || isEditing}
          {...register("address")}
        />
      </FormRow>

      <FormRow label="City" error={errors?.city?.message}>
        <Input
          type="text"
          id="city"
          disabled={isAdding || isEditing}
          {...register("city", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow label="Postcode" error={errors?.postcode?.message}>
        <Input
          type="number"
          id="postcode"
          disabled={isAdding || isEditing}
          {...register("postcode", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow label="Notes" error={errors?.notes?.message}>
        <Input
          type="text"
          id="notes"
          disabled={isAdding || isEditing}
          {...register("notes")}
        />
      </FormRow>

      <FormRow label="Invoice" error={errors?.invoiceFile?.message}>
        <FileInput
          accept=".pdf"
          id="invoiceFile"
          disabled={isAdding || isEditing}
          {...register("invoiceFile")}
        />
      </FormRow>

      <FormRow>
        {/* type = "reset" is an HTML attribute! */}
        <Button
          $size="medium"
          $variation="secondary"
          type="reset"
          disabled={isAdding || isEditing}
          onClick={() => onCloseModal?.()}
        >
          Cancel
        </Button>

        <Button
          $size="medium"
          $variation="primary"
          disabled={isAdding || isEditing}
        >
          {isEditSession ? "Edit customer" : "Add customer"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default NewCustomerForm;
