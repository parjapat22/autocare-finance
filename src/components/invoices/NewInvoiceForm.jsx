import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

import AddItem from "./AddItem";
import ItemsList from "./ItemsList";

import Form from "../../styles/Form";
import FormSection from "../../styles/FormSection";
import FormCol from "../../styles/FormCol";
import Row from "../../styles/Row";
import InputRow from "../../styles/InputRow";
import Input from "../../styles/Input";
import Select from "../../styles/Select";
import Button from "../../styles/Button";

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 2rem;
  }
`;

const Error = styled.span`
  color: var(--color-red-500);
  font-size: 1.5rem;
`;

function NewInvoiceForm() {
  // getValues gives current field value (same as event.target.value)
  const { register, handleSubmit, reset, getValues, formState } = useForm();
  const { errors } = formState;

  const [items, setItems] = useState([]);

  const handleAddItem = (item) => {
    setItems([...items, item]);
  };

  const handleDeleteItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const calculateSubAmount = () => {
    return items.reduce((sum, item) => sum + item.amount, 0);
  };

  function onSubmit(data) {
    console.log(data);
    // addCustomer(data, {
    //   onSuccess: () => {
    //     reset();
    //     onCloseModal?.();
    //   },
    // });
  }

  function onError(errors) {
    console.log(errors);
    // errors are handled using hook inbuilt formState
    // formState is an alternate way to handle errors
  }

  return (
    <>
      <Form type="regular" onSubmit={handleSubmit(onSubmit, onError)}>
        {/* customer and vehicle details section */}
        <FormSection>
          <FormRow>
            {/* column 1 - customer details */}
            <FormCol>
              <h4>Customer details</h4>
              <InputRow>
                <label htmlFor="fullName">Customer Name</label>

                <Input
                  type="text"
                  placeholder="customer name"
                  id="fullName"
                  {...register("fullName", {
                    required: "This field is required",
                  })}
                />

                {errors?.fullName?.message && (
                  <Error>{errors?.fullName?.message}</Error>
                )}
              </InputRow>

              <InputRow>
                <label htmlFor="address">Address</label>

                <Input
                  type="text"
                  placeholder="address"
                  id="address"
                  {...register("address")}
                />
              </InputRow>

              <InputRow>
                <label htmlFor="city">City</label>

                <Input
                  type="text"
                  placeholder="city"
                  id="city"
                  {...register("city", {
                    required: "This field is required",
                  })}
                />

                {errors?.city?.message && (
                  <Error>{errors?.city?.message}</Error>
                )}
              </InputRow>

              <InputRow>
                <label htmlFor="postcode">Postcode</label>

                <Input
                  type="text"
                  placeholder="post code"
                  id="postcode"
                  {...register("postcode")}
                />
              </InputRow>

              <InputRow>
                <label htmlFor="mobile">Mobile</label>

                <Input
                  type="number"
                  placeholder="mobile number"
                  id="mobile"
                  {...register("mobile")}
                />
              </InputRow>

              <InputRow>
                <label htmlFor="email">Email</label>

                <Input
                  type="text"
                  placeholder="email id"
                  id="email"
                  {...register("email")}
                />
              </InputRow>
            </FormCol>

            {/* column 2 - vehicle details */}
            <FormCol>
              <h4>Vehicle details</h4>

              <InputRow>
                <label htmlFor="date">Invoice Date</label>

                <Input
                  type="date"
                  placeholder="invoice date"
                  id="date"
                  {...register("date", {
                    required: "This field is required",
                  })}
                />

                {errors?.date?.message && (
                  <Error>{errors?.date?.message}</Error>
                )}
              </InputRow>

              <InputRow>
                <label htmlFor="make">Make</label>

                <Input
                  type="text"
                  placeholder="Toyota / Kia / Hyundai"
                  id="make"
                  {...register("make", {
                    required: "This field is required",
                  })}
                />

                {errors?.make?.message && (
                  <Error>{errors?.make?.message}</Error>
                )}
              </InputRow>

              <InputRow>
                <label htmlFor="modal">Modal</label>

                <Input
                  type="text"
                  placeholder="Camry / Seltos / Tucson"
                  id="modal"
                  {...register("modal", {
                    required: "This field is required",
                  })}
                />

                {errors?.modal?.message && (
                  <Error>{errors?.modal?.message}</Error>
                )}
              </InputRow>

              <InputRow>
                <label htmlFor="rego">Rego</label>

                <Input
                  type="text"
                  placeholder="123 ABC"
                  id="rego"
                  {...register("rego", {
                    required: "This field is required",
                  })}
                />

                {errors?.rego?.message && (
                  <Error>{errors?.rego?.message}</Error>
                )}
              </InputRow>

              <InputRow>
                <label htmlFor="odometer">Odometer</label>

                <Input
                  type="number"
                  placeholder="odometer reading"
                  id="odometer"
                  {...register("odometer", {
                    required: "This field is required",
                  })}
                />

                {errors?.odometer?.message && (
                  <Error>{errors?.odometer?.message}</Error>
                )}
              </InputRow>

              <InputRow>
                <label htmlFor="vehicle-type">Vehicle Type</label>

                <Select
                  id="vehicle-type"
                  name="vehicle-type"
                  {...register("vehicle-type")}
                >
                  <option value="car">Car</option>
                  <option value="car">Jeep</option>
                  <option value="ute">Ute</option>
                  <option value="ute">Van</option>
                  <option value="truck">Truck</option>
                  <option value="bike">Bike</option>
                </Select>
              </InputRow>
            </FormCol>
          </FormRow>
        </FormSection>

        {/* action buttons */}
        <FormSection>
          <FormRow>
            {/* type = "reset" is an HTML attribute! */}
            <Button
              $size="medium"
              $variation="secondary"
              type="reset"
              // onClick={() => onCloseModal?.()}
            >
              Clear
            </Button>

            <Button $size="medium" $variation="primary">
              Validate
            </Button>
          </FormRow>
        </FormSection>
      </Form>

      {/* add item section */}
      <FormSection>
        <Row type="vertical">
          <h4>Add new item</h4>
          <AddItem onAddItem={handleAddItem} />
        </Row>
      </FormSection>

      {/* items list section */}
      <FormSection>
        <h4>Items list</h4>
        <ItemsList
          items={items}
          onDeleteItem={handleDeleteItem}
          total={calculateSubAmount()}
        />
      </FormSection>
    </>
  );
}

export default NewInvoiceForm;
