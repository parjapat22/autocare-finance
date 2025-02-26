import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { addEditPrice } from "../../services/apiPrices";

export function useAddPrice() {
  const queryClient = useQueryClient();

  // add customer
  const { isLoading: isAdding, mutate: addPrice } = useMutation({
    mutationFn: addEditPrice,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["prices"] });
      toast.success("New item added successfully");
    },

    onError: (err) => toast.error(err.message),
  });

  return { isAdding, addPrice };
}
