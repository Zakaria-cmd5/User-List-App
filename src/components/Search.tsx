import { useRef } from "react";

interface Props {
  onSearch: (searchText: string) => void;
}

const Search = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <input
        type="text"
        ref={ref}
        placeholder="Search by name"
        className="p-3 border border-gray-300 rounded-full w-full shadow-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-300 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-md"
      />
    </form>
  );
};

export default Search;
