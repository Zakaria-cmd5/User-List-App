import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const UserCardSkeleton = () => {
  const users = [1, 2, 3, 4, 5, 6];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-4 my-4">
      {users.map((user) => (
        <div
          key={user}
          className="border border-gray-300 rounded-lg p-4 bg-white shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
        >
          <Skeleton className="w-24 h-24 mb-4 shadow-md" />
          <div className="text-center">
            <Skeleton className="text-lg font-semibold text-gray-900" />
            <Skeleton className="text-sm text-gray-600" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserCardSkeleton;
