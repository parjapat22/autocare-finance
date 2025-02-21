import supabase, { supabaseUrl } from "./supabase";

// 1. fetch data from database
// 2. display data on interface - see customers/CustomerTable.jsx
export async function getCustomers() {
  const { data, error } = await supabase.from("customers").select("*");

  if (error) {
    console.log(error);
    throw new Error("Customers could not be loaded");
  }

  return data;
}

// add new customer
export async function addEditCustomer(newCustomer) {
  // create unique file name and file path

  const isFileUploaded = Boolean(newCustomer.invoiceFile);

  const fileName = `${Math.floor(Math.random() * 1000)}-${
    newCustomer.invoiceFile?.name
  }`.replaceAll("/", "");

  const filePath = `${supabaseUrl}/storage/v1/object/public/invoices-files/${fileName}`;

  // add customer with file name
  const { data, error } = await supabase
    .from("customers")
    .insert([{ ...newCustomer, invoiceFile: isFileUploaded ? filePath : "" }]);

  if (error) {
    console.log(error);
    throw new Error("New customer could not be added");
  }

  // upload the pdf file
  if (isFileUploaded) {
    const { error: storageError } = await supabase.storage
      .from("invoices-files")
      .upload(fileName, newCustomer.invoiceFile);

    // delete customer if there was an error uploading the pdf file
    if (storageError) {
      await supabase.from("customers").delete().eq("id", data.id);

      console.log(storageError);
      throw new Error(
        "Invoice file could not be uploaded and the customer was not created"
      );
    }
  }

  return data;
}

// delete customer row
export async function deleteCustomer(id) {
  const { error } = await supabase.from("customers").delete().eq("id", id);

  if (error) {
    console.log(error);
    throw new Error("Customer could not be deleted");
  }
}
