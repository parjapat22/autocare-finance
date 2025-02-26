import supabase from "./supabase";

// 1. fetch data from database
// 2. display data on interface - see prices/PricesTable.jsx
export async function getPrices() {
  const { data, error } = await supabase.from("prices").select("*");

  if (error) {
    console.error(error);
    throw new Error("Prices could not be loaded");
  }

  return data;
}

// edit new price item
export async function updatePrice(newItem) {
  const { data, error } = await supabase
    .from("prices")
    .update(newItem)
    .eq("id", 1)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Rate list could not be updated");
  }

  return data;
}
