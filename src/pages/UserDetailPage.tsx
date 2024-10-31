import { Link, useParams } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";
import UserCardSkeleton from "../components/UserCardSkeleton";
import useUser from "../hooks/useUser";

const UserDetailPage = () => {
  const { id } = useParams();

  const { data: user, isLoading, error } = useUser(id!);

  if (isLoading) return <UserCardSkeleton isItUserDetailPage={true} />;

  if (error) return <ErrorMessage>{error.message}</ErrorMessage>;

  return (
    <>
      <div className="flex justify-center items-center w-[600px] mx-auto border border-gray-300 rounded-lg p-4 bg-white shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
        <img
          src={user?.data.avatar}
          alt={`${user?.data.first_name} ${user?.data.last_name}`}
          className="w-24 h-24 rounded-full object-cover mb-4 shadow-md"
        />
        <div className="text-center">
          <p className="text-lg font-semibold text-gray-900">
            {user?.data.first_name} {user?.data.last_name}
          </p>
          <p className="text-sm text-gray-600">{user?.data.email}</p>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <Link to='/' className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 transition-colors duration-300">
          Back
        </Link>
      </div>
    </>
  );
};

export default UserDetailPage;
