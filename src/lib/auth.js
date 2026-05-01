export const isLoggedIn = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("user");
  }
  return null;
};