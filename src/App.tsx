import { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import LandingPage from "./pages/LandingPage";

const ItemsPage = lazy(() => import("./pages/ItemsPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

function PageFallback() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  {
    path: "/items",
    element: (
      <Suspense fallback={<PageFallback />}>
        <ItemsPage />
      </Suspense>
    ),
  },
  {
    path: "*",
    element: (
      <Suspense fallback={<PageFallback />}>
        <NotFoundPage />
      </Suspense>
    ),
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
