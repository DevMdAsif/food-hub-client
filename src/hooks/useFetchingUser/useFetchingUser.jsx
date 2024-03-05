import { useQuery } from "@tanstack/react-query";

import useAuthContext from "../../hooks/usecontext/useAuthContext";

function useFetchingCartUser() {
  const { user } = useAuthContext();

  const { data, isError, error, refetch, isPending } = useQuery({
    queryKey: ["user", user?.email],
    queryFn: async () => {
      try {
        const response = await fetch("/api/users");
        return response.json();
      } catch (error) {
        throw new Error("An error occurred while fetching users");
      }
    },
  });

  return { data, isError, isPending, error, refetch };
}

export default useFetchingCartUser;
