import { QueryClient } from "@tanstack/react-query";
import { redirect } from "react-router-dom";

export const queryClient = new QueryClient();

export const loginUser = async (formData) => {
  const { username, password } = formData;

  try {
    const response = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password,
        // expiresInMins: 60, // optional
      }),
    });
    const user = await response.json();
    return user;
  } catch (error) {
    throw new Error(error);
  }
};

export const setAuthUser = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const getAuthUser = () => {
  const user = localStorage.getItem("user");
  if (!user) return null;
  return JSON.parse(user);
};

export const checkAuthUser = () => {
  const user = getAuthUser();
  if (!user) {
    return redirect("/");
  }
  return null;
};

export const getProducts = async (params) => {
  let url = "https://dummyjson.com/products";
  if (params) url += `/search?q=${params}`;

  try {
    const response = await fetch(url);
    const { products } = await response.json();
    return products;
  } catch (error) {
    throw new Error(error);
  }
};

export const getProductDetail = async (id) => {
  try {
    const response = await fetch("https://dummyjson.com/products/" + id);
    const product = await response.json();
    return product;
  } catch (error) {
    throw new Error(error);
  }
};

export const getProductComments = async (id) => {
  try {
    const response = await fetch("https://dummyjson.com/comments");
    const { comments } = await response.json();

    const productComments = comments.filter(
      (comment) => comment.postId === Number(id)
    );
    return productComments;
  } catch (error) {
    throw new Error(error);
  }
};

export const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
