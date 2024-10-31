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

const useUsers = () => {
  return useQuery<ApiResponse, Error>({
    queryKey: ["users"],
    queryFn: () =>
      axios
        .get<ApiResponse>("https://reqres.in/api/users?page=1")
        .then((res) => res.data),
  });
};

export default useUsers;
