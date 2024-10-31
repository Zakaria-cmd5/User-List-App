import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <Navbar onSearch={setSearchTerm} />
      <Outlet context={{ searchTerm }} />
    </>
  );
};

export default Layout;
