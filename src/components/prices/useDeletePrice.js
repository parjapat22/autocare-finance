import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { deletePrice as deletePriceApi } from "../../services/apiPrices";

export function useDeletePrice() {
  // this hook is used to re-fetch the data upon successfull delete action
  const queryClient = useQueryClient();

  // delete price item
  const { isLoading: isDeleting, mutate: deletePrice } = useMutation({
    mutationFn: (id) => deletePriceApi(id),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["prices"] });

      toast.success("Item deleted successfully");
    },

    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deletePrice };
}
