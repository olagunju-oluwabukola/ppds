import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./Pages/Error";
import Home from "./Pages/Home";
import Layout from "./Pages/Layout";
import About from "./Pages/About";
import Training from "./Pages/Training";
import Consultation from "./Pages/Consultation";
import Blog from "./Pages/Blog";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About/>,
        },
        {
          path:'/services/training',
          element:<Training/>
        },
        {
          path:'/services/consultation',
          element:<Consultation/>
        },
        {
          path:'/blog',
          element:<Blog/>
        }
        
        
      ],
    },
    {
      path: "*",
      element: <Error />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
