import supabase from "./supabase";

// 1. fetch data from database
// 2. display data on interface - see prices/PricesTable.jsx
export async function getPrices() {
  const { data, error } = await supabase.from("prices").select("*");

  if (error) {
    console.log(error);
    throw new Error("Prices could not be loaded");
  }

  return data;
}

// add / edit new price item
export async function addEditPrice(newItem) {
  let query = supabase.from("prices");

  // add price item
  if (!newItem.id) {
    query = query.insert([{ ...newItem }]);
  }

  // edit price item
  if (newItem.id) {
    query = query.update({ ...newItem }).eq("id", newItem.id);
  }

  const { data, error } = await query.select().single();

  if (error) {
    console.log(error);
    throw new Error("New price item could not be added");
  }

  return data;
}

// delete price item row
export async function deletePrice(id) {
  const { error } = await supabase.from("prices").delete().eq("id", id);

  if (error) {
    console.log(error);
    throw new Error("Item could not be deleted");
  }
}
