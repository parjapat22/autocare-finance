import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { addEditCustomer } from "../../services/apiCustomers";

export function useEditCustomer() {
  const queryClient = useQueryClient();

  // edit customer
  const { isLoading: isEditing, mutate: editCustomer } = useMutation({
    mutationFn: addEditCustomer,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["customers"] });
      toast.success("Customer edited successfully");
    },

    onError: (err) => toast.error(err.message),
  });

  return { isEditing, editCustomer };
}
