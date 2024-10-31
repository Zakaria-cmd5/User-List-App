import { createBrowserRouter } from "react-router-dom";
import ErrorPages from "./pages/ErrorPages";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import UserDetailPage from "./pages/UserDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPages />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/user/:id", element: <UserDetailPage /> },
    ],
  },
]);

export default router;
