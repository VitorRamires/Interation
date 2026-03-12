import { Signin } from "./components/signin/signin";
import { PostPanel } from "./components/Posts/PostPanel";
import { UserProvider, useUser } from "./context/username";
import "./style/style.css";
import { ListPostProvider } from "./context/postslists";

function App() {
  return (
    <>
      <UserProvider>
        <ListPostProvider>
          <AppContent />
        </ListPostProvider>
      </UserProvider>
    </>
  );
}

function AppContent() {
  const { username } = useUser();
  return username ? <PostPanel /> : <Signin />;
}

export default App;
