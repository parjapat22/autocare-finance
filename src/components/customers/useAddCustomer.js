import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { addEditCustomer } from "../../services/apiCustomers";

export function useAddCustomer() {
  const queryClient = useQueryClient();

  // add customer
  const { isLoading: isAdding, mutate: addCustomer } = useMutation({
    mutationFn: addEditCustomer,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["customers"] });
      toast.success("New customer added successfully");
    },

    onError: (err) => toast.error(err.message),
  });

  return { isAdding, addCustomer };
}
