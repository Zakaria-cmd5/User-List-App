import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type UserObject = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

type ApiResponse = {
  data: UserObject;
};

const useUser = (userId: string) => {
  return useQuery<ApiResponse, Error>({
    queryKey: ["user", userId],
    queryFn: () =>
      axios
        .get<ApiResponse>(`https://reqres.in/api/users/${userId}`)
        .then((res) => res.data),
    staleTime: 1 * 60 * 1000, // 1 minute
  });
};

export default useUser;
