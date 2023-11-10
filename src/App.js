import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import Movie from "./components/Movie";
import Auth from "./pages/Auth";
import Login from "./pages/Login";
import Company from "./pages/Company";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Auth /> },
      { path: "movies", element: <Movie /> },
      { path: "login", element: <Login /> },
      { path: "company", element: <Company /> },
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
