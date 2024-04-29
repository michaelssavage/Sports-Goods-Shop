import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./assets/styles/index.css";
import { Home } from "./pages/Home";
import Root from "./routes/root";
import { ErrorPage } from "./pages/ErrorPage";
import { ShopDataContextProvider } from "./context/products.context";
import { Create } from "./pages/Create";
import ErrorBoundary from "./components/ErrorBoundary";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/create",
        element: <Create />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ShopDataContextProvider>
      <ErrorBoundary>
        <RouterProvider router={router} />
      </ErrorBoundary>
    </ShopDataContextProvider>
  </React.StrictMode>
);
