import { useQuery } from "@tanstack/react-query";

import { getPrices } from "../../services/apiPrices";

// 1. fetch data from database - see services/apiPrices.js
// 2. display data on interface
export function usePrices() {
  const {
    isLoading,
    error,
    data: items,
  } = useQuery({ queryKey: ["prices"], queryFn: getPrices });

  return { isLoading, error, items };
}
