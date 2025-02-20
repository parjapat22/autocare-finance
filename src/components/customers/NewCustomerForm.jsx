import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { addCustomer } from "../../services/apiCustomers";

import Form from "../../styles/Form";
import FormRow from "../../styles/FormRow";
import Input from "../../styles/Input";
import Textarea from "../../styles/Textarea";
import FileInput from "../../styles/FileInput";
import Button from "../../styles/Button";

// useForm hook
// 1. register the input fields
// 2. add onSubmit function to form element
// 3. useMutation hook to handle form data
// 4. reset the input fields

// getValues gives current field value (same as event.target.value)
function NewCustomerForm() {
  const { register, handleSubmit, reset, getValues, formState } = useForm();
  const { errors } = formState;

  const queryClient = useQueryClient();
  const { isLoading: isAdding, mutate } = useMutation({
    mutationFn: addCustomer,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["customers"] });
      toast.success("New customer added successfully");
      reset();
    },

    onError: (err) => toast.error(err.message),
  });

  function onSubmit(data) {
    mutate(data);
  }

  function onError(errors) {
    // console.log(errors);
    // errors are handled using hook inbuilt formState
    // formState is an alternate way to handle errors
  }

  return (
    <Form type="regular" onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label="Customer name" error={errors?.fullName?.message}>
        <Input
          type="text"
          id="fullName"
          disabled={isAdding}
          {...register("fullName", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow label="Mobile" error={errors?.mobile?.message}>
        <Input
          type="number"
          id="mobile"
          disabled={isAdding}
          {...register("mobile", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow label="Email" error={errors?.email?.message}>
        <Input
          type="text"
          id="email"
          disabled={isAdding}
          {...register("email", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow label="Address" error={errors?.address?.message}>
        <Textarea
          type="text"
          id="address"
          disabled={isAdding}
          {...register("address")}
        />
      </FormRow>

      <FormRow label="City" error={errors?.city?.message}>
        <Input
          type="text"
          id="city"
          disabled={isAdding}
          {...register("city", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow label="Postcode" error={errors?.postcode?.message}>
        <Input
          type="number"
          id="postcode"
          disabled={isAdding}
          {...register("postcode", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow label="Notes" error={errors?.notes?.message}>
        <Input
          type="text"
          id="notes"
          disabled={isAdding}
          {...register("notes")}
        />
      </FormRow>

      <FormRow label="Invoice">
        <FileInput accept=".pdf" id="invoiceNumber" disabled={isAdding} />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button
          size="medium"
          variation="secondary"
          type="reset"
          disabled={isAdding}
        >
          Cancel
        </Button>

        <Button size="medium" variation="primary" disabled={isAdding}>
          Add Customer
        </Button>
      </FormRow>
    </Form>
  );
}

export default NewCustomerForm;
