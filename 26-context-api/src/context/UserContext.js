import { createContext } from "react";
const defaultUser = {
  name: "홍길동",
  setName: () => {},
};
export const UserContext = createContext(defaultUser);
