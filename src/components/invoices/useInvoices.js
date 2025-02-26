import { useQuery } from "@tanstack/react-query";

import { getInvoices } from "../../services/apiInvoices";

export function useInvoices() {
  const {
    isLoading,
    error,
    data: invoices,
  } = useQuery({
    queryKey: ["invoices"],
    queryFn: getInvoices,
  });

  return { isLoading, error, invoices };
}
