import { useForm } from "react-hook-form";
import styled from "styled-components";

import Form from "../../styles/Form";
import Input from "../../styles/Input";
import Textarea from "../../styles/Textarea";
import FileInput from "../../styles/FileInput";
import Button from "../../styles/Button";

const FormRow = styled.div`
  padding: 1rem 0;
  display: grid;
  grid-template-columns: 24rem 1fr 1.5fr;
  align-items: center;
  gap: 2rem;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-neutral-200);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 2rem;
  }
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-500);
`;

// useForm hook
// 1. register the input fields
// 2. add onSubmit function to form element
function NewCustomerForm() {
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <Form type="regular" onSubmit={handleSubmit(onSubmit)}>
      <FormRow>
        <label htmlFor="name">Customer name</label>
        <Input type="text" id="name" {...register("name")} />
      </FormRow>

      <FormRow>
        <label htmlFor="mobile">Mobile</label>
        <Input type="number" id="mobile" {...register("mobile")} />
      </FormRow>

      <FormRow>
        <label htmlFor="email">Email</label>
        <Input type="text" id="email" {...register("email")} />
      </FormRow>

      <FormRow>
        <label htmlFor="address">Address</label>
        <Textarea type="text" id="address" {...register("address")} />
      </FormRow>

      <FormRow>
        <label htmlFor="city">City</label>
        <Input type="text" id="city" {...register("city")} />
      </FormRow>

      <FormRow>
        <label htmlFor="postcode">Postcode</label>
        <Input
          type="number"
          id="postcode"
          defaultValue={2000}
          {...register("postcode")}
        />
      </FormRow>

      <FormRow>
        <label htmlFor="notes">Notes</label>
        <Input type="text" id="notes" {...register("notes")} />
      </FormRow>

      <FormRow>
        <label htmlFor="invoice">Invoice</label>
        <FileInput accept=".pdf" id="invoice" />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button size="medium" variation="secondary" type="reset">
          Cancel
        </Button>

        <Button size="medium" variation="primary">
          Add Customer
        </Button>
      </FormRow>
    </Form>
  );
}

export default NewCustomerForm;
