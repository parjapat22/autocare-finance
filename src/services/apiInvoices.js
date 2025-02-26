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
