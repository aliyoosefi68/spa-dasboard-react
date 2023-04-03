import Home from "./pages/home/Home";
import UserList from "./pages/Users/UserList";
import NewUser from "./pages/NewUser/NewUser";
import Products from "./pages/Products/Products";
import Product from "./pages/product/Product";

let routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/users",
    element: <UserList />,
  },
  {
    path: "/newuser",
    element: <NewUser />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/product/:id",
    element: <Product />,
  },
];

export default routes;
