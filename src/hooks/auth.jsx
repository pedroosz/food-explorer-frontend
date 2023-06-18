import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  async function logIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password });

      const { user: userData, token } = response.data;

      const userContextData = {
        email: userData.email,
        admin: userData.admin == true ? true : false,
        id: userData.id,
      };

      localStorage.setItem("token", token);

      api.defaults.headers.common.Authorization = `Bearer ${token}`;

      setUser({ ...userContextData, token });
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        alert(error.response.data.message);
      } else {
        alert("Algo inesperado ocorreu.");
      }
    }
  }

  function logOut() {
    localStorage.removeItem("token");
    setUser(null);
  }

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      return logOut();
    }

    api.defaults.headers.common.Authorization = `Bearer ${token}`;

    api
      .get("/sessions")
      .then((res) => {
        if (res.status !== 200) {
          return logOut();
        }

        let { id, email, admin } = res.data;

        setUser({ id, email, admin });
      })
      .catch((error) => {
        setUser(null);
        console.log("Error occurred while checking session:", error);
      });
  }, []);

  const authContextValue = {
    user,
    logIn,
    logOut,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}
