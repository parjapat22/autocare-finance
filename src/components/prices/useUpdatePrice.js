import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { addEditPrice } from "../../services/apiPrices";

export function useUpdatePrice() {
  const queryClient = useQueryClient();

  const { isLoading: isUpdating, mutate: updatePrice } = useMutation({
    mutationFn: addEditPrice,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["prices"] });
      toast.success("Item updated successfully");
    },

    onError: (err) => toast.error(err.message),
  });

  return { isUpdating, updatePrice };
}
