import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updatePrice as updatePriceApi } from "../../services/apiPrices";

export function useUpdatePrice() {
  const queryClient = useQueryClient();

  const { isLoading: isUpdating, mutate: updatePrice } = useMutation({
    mutationFn: updatePriceApi,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["prices"] });
      toast.success("Price updated successfully");
    },

    onError: (err) => toast.error(err.message),
  });

  return { isUpdating, updatePrice };
}
