import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import Movie from "./components/Movie";
import Auth from "./pages/Auth";
import Login from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Movie /> },
      { path: "signup", element: <Auth /> },
      { path: "login", element: <Login /> },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
