import styled from "styled-components";

import Form from "../../styles/Form";
import Input from "../../styles/Input";
import Textarea from "../../styles/Textarea";
import FileInput from "../../styles/FileInput";
import Button from "../../styles/Button";

const FormRow = styled.div`
  padding: 1rem 0;
  display: grid;
  grid-template-columns: 24rem 1fr 1.2fr;
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

function NewCustomerForm() {
  return (
    <Form type="regular">
      <FormRow>
        <label htmlFor="name">Customer name</label>
        <Input type="text" id="name" />
      </FormRow>

      <FormRow>
        <label htmlFor="mobile">Mobile</label>
        <Input type="number" id="mobile" />
      </FormRow>

      <FormRow>
        <label htmlFor="email">Email</label>
        <Input type="text" id="email" />
      </FormRow>

      <FormRow>
        <label htmlFor="address">Address</label>
        <Textarea type="text" id="address" defaultValue="" />
      </FormRow>

      <FormRow>
        <label htmlFor="city">City</label>
        <Input type="text" id="city" />
      </FormRow>

      <FormRow>
        <label htmlFor="postcode">Postcode</label>
        <Input type="number" id="postcode" />
      </FormRow>

      <FormRow>
        <label htmlFor="notes">Notes</label>
        <Input type="text" id="notes" />
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
          Edit Customer
        </Button>
      </FormRow>
    </Form>
  );
}

export default NewCustomerForm;
