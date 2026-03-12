import { createContext, useContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext();

export function UserProvider({ children }) {
  const [username, setUsername] = useState(() => {
    return localStorage.getItem("username") || "";
  });

  function login(name) {
    localStorage.setItem("username", name);
    setUsername(name);
  }

  function logout() {
    localStorage.removeItem("username");
    setUsername("");
  }

  return (
    <UserContext.Provider value={{ username, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useUser() {
  return useContext(UserContext);
}
