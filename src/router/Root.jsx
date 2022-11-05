import {createBrowserRouter, RouterProvider} from "react-router-dom";
import IndexLayout from "../components/Layout/IndexLayout";
import Main from "../components/Main/Main";


const Root = () => {
    const router = createBrowserRouter(
        [
            {
                path:"/",
                element:<IndexLayout/>,
                children:[
                    {path:"/",
                     element:<Main/>
                    }
                ]

            }
        ]
    )
  return(
        <RouterProvider router={router}/>
  )
}


export default Root;