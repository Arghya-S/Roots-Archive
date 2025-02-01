import { StrictMode } from "react"
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css"
import App from "./App";
import Home from "./pages/Home"
import ContactUs from "./pages/ContactUs"
import Browse from "./pages/Browse";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
  {
    path: "/archives",
    element: <App />,
  },
  {
    path: "/contact-us",
    element: <ContactUs />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);