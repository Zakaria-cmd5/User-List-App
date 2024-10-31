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
  data: UserObject[];
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
};

const useUsers = (page: number) => {
  return useQuery<ApiResponse, Error>({
    queryKey: ["users", page],
    queryFn: () =>
      axios
        .get<ApiResponse>(`https://reqres.in/api/users?page=${page}`)
        .then((res) => res.data),
    staleTime: 1 * 60 * 1000, // 1 minute
  });
};

export default useUsers;
