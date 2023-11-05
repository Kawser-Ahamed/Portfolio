import {
    createBrowserRouter,
} from "react-router-dom";
import Default from "./Default";
import Homepage from "../components/HomePage/Homepage";

export const router = createBrowserRouter([
    {
      path: "/",
      element:<Default></Default>,
      children:[
        {
            path: "/",
            element:<Homepage></Homepage>, 
        },
      ]
    },
  ]);