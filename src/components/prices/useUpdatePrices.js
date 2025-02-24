import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updatePrices as updatePricesApi } from "../../services/apiPrices";

export function useUpdatePrices() {
  const queryClient = useQueryClient();

  const { isLoading: isUpdating, mutate: updatePrices } = useMutation({
    mutationFn: updatePricesApi,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["prices"] });
      toast.success("Price updated successfully");
    },

    onError: (err) => toast.error(err.message),
  });

  return { isUpdating, updatePrices };
}
