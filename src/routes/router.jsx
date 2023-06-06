import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Shows from "../features/shows/Shows";
import ShowsDetails from "../features/shows/ShowsDetails";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children : [
      {
        path: "/",
        element: <Shows/>,
      },
      {
        path: "/:id",
        element: <ShowsDetails/>,
      }
    ]
  },
])
