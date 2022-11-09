import {createBrowserRouter, RouterProvider} from "react-router-dom";
import IndexLayout from "../components/Layout/IndexLayout";
import Main from "../components/Main/Main";
import CoinDetail from "../components/CoinDetail/CoinDetail";


const Root = () => {
    const router = createBrowserRouter(
        [
            {
                path:"/",
                element:<IndexLayout/>,
                children:[
                    {path:"/",
                     element:<Main/>
                    },{
                        path:"coin/:coinId",
                        element:<CoinDetail/>
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