import { useQuery } from "@tanstack/react-query";
import { getPrices } from "../../services/apiPrices";

export function usePrices() {
  const {
    isLoading,
    error,
    data: prices,
  } = useQuery({ queryKey: ["prices"], queryFn: getPrices });

  return { isLoading, error, prices };
}
