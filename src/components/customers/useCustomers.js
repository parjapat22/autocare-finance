import { useQuery } from "@tanstack/react-query";

import { getCustomers } from "../../services/apiCustomers";

// 1. fetch data from database - see services/apiCustomers.js
// 2. display data on interface
export function useCustomers() {
  const {
    isLoading,
    error,
    data: customers,
  } = useQuery({
    queryKey: ["customers"],
    queryFn: getCustomers,
  });

  return { isLoading, error, customers };
}
