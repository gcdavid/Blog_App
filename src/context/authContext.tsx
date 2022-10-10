// import React, { createContext, useEffect, useState } from "react";
// import { AppAxios } from "../services/Axios";

// interface AuthContextType {
//   currentUser?: string;
//   login?: any;
//   logout?: any;
// }

// type IAuthContextProps = {
//   children: React.ReactNode;
// };
// const AuthContext = createContext<AuthContextType | null>(null);

// const AuthContexProvider = ({ children }: IAuthContextProps) => {
//   const [currentUser, setCurrentUser] = useState<any>(
//     JSON.parse(localStorage.getItem("user") || "{}")
//   );

//   const login = async (inputs: any) => {
//     const res = await AppAxios.post("/auth/login", inputs);
//     setCurrentUser(res.data);
//   };

//   const logout = async (inputs: any) => {
//     await AppAxios.post("/auth/logout");
//     setCurrentUser(null);
//   };

//   useEffect(() => {
//     localStorage.setItem("user", JSON.stringify(currentUser));
//   }, [currentUser]);

//   return (
//     <AuthContext.Provider value={{ currentUser, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthContexProvider;

import React, { createContext, useEffect, useState } from "react";
import { AppAxios } from "../services/Axios";
import { IAuthContextType } from "../types/authContext";

export const AuthContext = createContext<IAuthContextType | null>(null);

const AuthContexProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<string | any>(
    JSON.parse(localStorage.getItem("user") || "{}")
  );

  const login = async (inputs: LoginInfo.Login) => {
    console.log(inputs);
    const res = await AppAxios.post("/auth/login", inputs);
    setCurrentUser(res.data);
  };

  const logout = async (inputs: LoginInfo.Login) => {
    await AppAxios.post("/auth/logout");
    setCurrentUser(null);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);
  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContexProvider;
