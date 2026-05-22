import { createBrowserRouter, RouterProvider } from "react-router";
import LandingPage from "./pages/LandingPage";
import ItemsPage from "./pages/ItemsPage";
import NotFoundPage from "./pages/NotFoundPage";

const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "/items", element: <ItemsPage /> },
  { path: "*", element: <NotFoundPage /> },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
