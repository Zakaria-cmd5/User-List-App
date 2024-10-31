import { useState } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

interface Props {
  onSearch: (searchTerm: string) => void;
}

const Navbar = ({ onSearch }: Props) => {
  const [, setSearchTerm] = useState("");

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    onSearch(term);
  };

  return (
    <nav className="flex justify-between items-center gap-12 my-2 mx-2">
      <Link
        to="/"
        className="p-4 text-white bg-black rounded-lg border-4 border-[#EEF9F3] 
            transition-transform transform hover:scale-105 hover:bg-[#3F3F3F] 
            hover:border-green-700 shadow-md hover:shadow-lg"
      >
        Users
      </Link>
      <Search onSearch={handleSearch} />
    </nav>
  );
};

export default Navbar;