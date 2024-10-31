import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";

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

const HomePage = () => {
  const { data: users, error } = useQuery<ApiResponse, Error>({
    queryKey: ["users"],
    queryFn: () =>
      axios
        .get<ApiResponse>("https://reqres.in/api/users?page=1")
        .then((res) => res.data),
  });

  if (error) return <ErrorMessage>{error.message}</ErrorMessage>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-4 my-4">
      {users?.data?.map((user) => (
        <Link
          to={`/user/${user.id}`}
          key={user.id}
          className="border border-gray-300 rounded-lg p-4 bg-white shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
        >
          <img
            src={user.avatar}
            alt={`${user.first_name} ${user.last_name}`}
            className="w-24 h-24 rounded-full object-cover mb-4 shadow-md"
          />
          <div className="text-center">
            <p className="text-lg font-semibold text-gray-900">
              {user.first_name} {user.last_name}
            </p>
            <p className="text-sm text-gray-600">{user.email}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HomePage;
