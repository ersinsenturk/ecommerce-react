import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./util/api";

import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/Error";
import ProductsPage from "./pages/Products";
// import ProfilePage from "./pages/Profile";
// import CartLayout from "./pages/CartLayout";
// import Cart from "./pages/Cart";
// import ProductDetail from "./pages/ProductDetail";
import { action as logoutAction } from "./pages/Logout";
import { useDispatch } from "react-redux";
import { authActions } from "./store/auth";
import { lazy, Suspense } from "react";

const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const ProfilePage = lazy(() => import("./pages/Profile"));
const CartLayout = lazy(() => import("./pages/CartLayout"));
const Cart = lazy(() => import("./pages/Cart"));

const App = () => {
  const dispatch = useDispatch();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      loader: () => import("./util/api").then((module) => module.getAuthUser()),
      children: [
        {
          index: true,
          element: <ProductsPage />,
        },
        {
          path: "product/:id",
          element: (
            <Suspense fallback={<p>Loading...</p>}>
              <ProductDetail />
            </Suspense>
          ),
        },
        {
          path: "profile",
          element: (
            <Suspense fallback={<p>Loading...</p>}>
              <ProfilePage />
            </Suspense>
          ),
          loader: () =>
            import("./util/api").then((module) => module.checkAuthUser()),
        },
      ],
    },
    {
      path: "cart",
      element: (
        <Suspense fallback={<p>Loading...</p>}>
          <CartLayout />
        </Suspense>
      ),
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<p>Loading...</p>}>
              <Cart />
            </Suspense>
          ),
          loader: () =>
            import("./util/api").then((module) => module.checkAuthUser()),
        },
      ],
    },
    {
      path: "logout",
      action: () => {
        logoutAction();
        dispatch(authActions.logout());
        return redirect("/");
      },
    },
  ]);
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>
    </QueryClientProvider>
  );
};

export default App;
