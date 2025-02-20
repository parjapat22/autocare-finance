import supabase from "./supabase";

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
