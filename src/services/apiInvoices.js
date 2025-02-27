import supabase from "./supabase";

// 1. fetch data from database
export async function getInvoices() {
  const { data, error } = await supabase.from("invoices").select("*");

  if (error) {
    console.log(error);
    throw new Error("Invoices could not be loaded");
  }

  return data;
}

// delete invoice
export async function deleteInvoice(id) {
  const { error } = await supabase.from("invoices").delete().eq("id", id);

  if (error) {
    console.log(error);
    throw new Error("Invoice could not be deleted");
  }
}
