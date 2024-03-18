import { useQuery } from "@tanstack/react-query";

import useAuthContext from "../../hooks/usecontext/useAuthContext";
import useAxiosSecure from "../AxiosSecure/useAxiosSecure";

function useFetchingCartItem() {
  const { user } = useAuthContext();
  const AxiosSecure = useAxiosSecure();

  const { data, isError, error, refetch, isPending } = useQuery({
    queryKey: ["carts", user?.email],
    queryFn: async () => {
      try {
        const response = await AxiosSecure(`/api/carts?email=${user?.email}`);
        return response.data;
      } catch (error) {
        throw new Error("An error occurred while fetching cart items");
      }
    },
  });

  return { data, isError, isPending, error, refetch };
}

export default useFetchingCartItem;
