import { RouterProvider } from "react-router-dom";
import UserList from "./pages/user/UserList";
import router from "./routes/router";

function App() {
  return (
    <RouterProvider router={router}>
      <UserList />
    </RouterProvider>
  );
}

export default App;
