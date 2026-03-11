import { useState } from "react";
import { Signin } from "./components/signin/signin";
import { PostPanel } from "./components/Posts/PostPanel";
import { UserProvider } from "./context/username";
import "./style/style.css";
import { ListPostProvider } from "./context/postslists";

function App() {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <>
      <UserProvider>
        <ListPostProvider>
          {!isLogged ? <Signin onEnter={() => setIsLogged(true)} /> : <PostPanel />}
        </ListPostProvider>
      </UserProvider>
    </>
  );
}

export default App;
