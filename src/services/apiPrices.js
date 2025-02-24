import supabase from "./supabase";

export async function getPrices() {
  const { data, error } = await supabase.from("prices").select("*").single();

  if (error) {
    console.error(error);
    throw new Error("Prices could not be loaded");
  }

  return data;
}

// We expect a new price object that looks like {property name: newValue}
export async function updateSetting(newSetting) {
  const { data, error } = await supabase
    .from("prices")
    .update(newSetting)
    // There is only ONE row of settings, and it has the ID=1, and so this is the updated one
    .eq("id", 1)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Rate list could not be updated");
  }

  return data;
}
