import { useQuery } from "@tanstack/react-query";

import useAuthContext from "../../hooks/usecontext/useAuthContext";

function useFetchingCartItem({url}) {
    
  const { user } = useAuthContext();
  console.log(user.email);

  const { isLoading, data, error, refetch } = useQuery({
    queryKey: ["carts", user?.email],
    queryFn: async () => {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
  });

  return { data, error, refetch, isLoading };
}

export default useFetchingCartItem;
