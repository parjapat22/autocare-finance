import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { deleteInvoice as deleteInvoiceApi } from "../../services/apiInvoices";

export function useDeleteInvoice() {
  // this hook is used to re-fetch the data upon successfull delete action
  const queryClient = useQueryClient();

  // delete invoice
  const { isLoading: isDeleting, mutate: deleteInvoice } = useMutation({
    mutationFn: (id) => deleteInvoiceApi(id),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["invoices"] });
      toast.success("Invoice deleted successfully");
    },

    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteInvoice };
}
