import { Link } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";
import UserCardSkeleton from "../components/UserCardSkeleton";
import useUsers from "../hooks/useUsers";
import useSearchStore from "../store/searchStore";

const HomePage = () => {
  const { data: users, error, isLoading } = useUsers();

  const searchTerm = useSearchStore((state) => state.searchTerm);

  const filteredUsers = users?.data?.filter((user) =>
    `${user.first_name} ${user.last_name}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  if (error) return <ErrorMessage>{error.message}</ErrorMessage>;

  if (isLoading) return <UserCardSkeleton />;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-4 my-4">
      {filteredUsers && filteredUsers.length > 0 ? (
        filteredUsers?.map((user) => (
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
        ))
      ) : (
        <div className="col-span-full flex justify-center">
          <p className="text-lg font-semibold text-red-600 bg-red-50 border border-red-300 rounded-lg p-4 shadow-md max-w-md">
            User not found
          </p>
        </div>
      )}
    </div>
  );
};

export default HomePage;
