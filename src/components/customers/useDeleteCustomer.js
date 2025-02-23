import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { deleteCustomer as deleteCustomerApi } from "../../services/apiCustomers";

export function useDeleteCustomer() {
  // this hook is used to re-fetch the data upon successfull delete action
  const queryClient = useQueryClient();

  // delete customer
  const { isLoading: isDeleting, mutate: deleteCustomer } = useMutation({
    mutationFn: (id) => deleteCustomerApi(id),
    // same as above due to inputting same value (id)
    // mutationFn: deleteCustomer,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["customers"] });

      toast.success("Cabin deleted successfully");
    },

    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteCustomer };
}
