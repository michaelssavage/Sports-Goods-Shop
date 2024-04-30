import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./assets/styles/index.css";
import { Home } from "./pages/Home";
import Root from "./routes/root";
import { Error } from "./pages/Error";
import ErrorBoundary from "./components/ErrorBoundary";
import { Product } from "./pages/Product";
import {
  NotificationContextProvider,
  ShopDataContextProvider,
  ModalContextProvider,
} from "src/context";
import { Notifications } from "./components/Notifications";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/view/:id",
        element: <Product />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NotificationContextProvider>
      <ShopDataContextProvider>
        <ModalContextProvider>
          <ErrorBoundary>
            <RouterProvider router={router} />
          </ErrorBoundary>
        </ModalContextProvider>
      </ShopDataContextProvider>
      <Notifications />
    </NotificationContextProvider>
  </React.StrictMode>
);
