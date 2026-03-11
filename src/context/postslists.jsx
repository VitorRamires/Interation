import { createContext, useState } from "react";


// eslint-disable-next-line react-refresh/only-export-components
export const ListPostContext = createContext();

export function ListPostProvider({ children }) {
  const [postsList, setPostsList] = useState([]);
  const [offset, setOffset] = useState();

  return (
    <ListPostContext.Provider value={{ postsList, setPostsList, setOffset, offset }}>
      {children}
    </ListPostContext.Provider>
  );
}
