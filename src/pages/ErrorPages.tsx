import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import Navbar from "../components/Navbar";

const ErrorPages = () => {
  const error = useRouteError();

  return (
    <>
      <Navbar />
      <div className="mx-4">
        <h1>Opps</h1>
        <p>
          {isRouteErrorResponse(error)
            ? "This page does not exist."
            : "An unexpected error occured"}
        </p>
      </div>
    </>
  );
};

export default ErrorPages;
