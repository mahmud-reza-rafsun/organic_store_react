import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Error from "../Layout/Error";
import Product from "../components/Product/Product";
import Groceries from "../Pages/Groceries";
import PreOrder from "../Pages/PreOrder";
import About from "../Pages/About";

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
        path: "/about",
        element: <About />,
      },
      {
        path: "/preOrder",
        element: <PreOrder />,
      },
      {
        path: "/",
        element: <Product />,
      },
      {
        path: "/groceries",
        element: <Groceries />,
      },
    ],
  },
]);

export default router;
