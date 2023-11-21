import { Outlet, useLoaderData } from "react-router-dom";
import Header from "../components/Header/Header";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth";

const RootLayout = () => {
  const user = useLoaderData();
  const dispatch = useDispatch();
  useEffect(() => {
    if (user) {
      dispatch(authActions.login(user));
    }
  }, [dispatch, user]);
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
