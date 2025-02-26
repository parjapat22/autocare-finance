import supabase, { supabaseUrl } from "./supabase";

// 1. fetch data from database
// 2. display data on interface - see customers/CustomersTable.jsx
export async function getCustomers() {
  const { data, error } = await supabase.from("customers").select("*");

  if (error) {
    console.log(error);
    throw new Error("Customers could not be loaded");
  }

  return data;
}

// add / edit new customer
export async function addEditCustomer(newCustomer) {
  const isFileUploaded = Boolean(newCustomer.invoiceFile[0]?.name);

  const hasFilePath = Boolean(typeof newCustomer.invoiceFile === "string");

  // create unique file name for new file uploaded
  const fileName = `${Math.floor(Math.random() * 1000)}-${
    newCustomer.invoiceFile[0]?.name
  }`.replaceAll("/", "");

  // create file path for new file uploaded
  const filePathNewCust = isFileUploaded
    ? `${supabaseUrl}/storage/v1/object/public/invoices-files/${fileName}`
    : "";

  // get file path for existing customer
  const filePathEditCust = hasFilePath ? newCustomer.invoiceFile : "";

  // get final path for new / existing customer
  const filePath = isFileUploaded ? filePathNewCust : filePathEditCust;

  let query = supabase.from("customers");

  // add customer
  if (!newCustomer.id) {
    query = query.insert([{ ...newCustomer, invoiceFile: filePath }]);
  }

  // edit customer
  if (newCustomer.id) {
    query = query
      .update({ ...newCustomer, invoiceFile: filePath })
      .eq("id", newCustomer.id);
  }

  const { data, error } = await query.select().single();

  if (error) {
    console.log(error);
    throw new Error("New customer could not be added");
  }

  // upload the pdf file
  if (isFileUploaded) {
    const { error: storageError } = await supabase.storage
      .from("invoices-files")
      .upload(fileName, newCustomer.invoiceFile[0]);

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
