import React, { useState, lazy, Suspense } from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import Heading from "./src/components/Heading";
import Body from "./src/components/Body";
import About from "./src/components/About";
import Error from "./src/components/Error";
import Footer from "./src/components/Footer";
import { createBrowserRouter,RouterProvider, Outlet } from "react-router-dom";
import Shimmer from "./src/components/Shimmer.js"
import UserContext from "./src/utils/UserContext";
import { Provider } from "react-redux";
import store from "./src/utils/store";
import Cart from "./src/components/Cart";
import Menue from "./src/components/Menu";
import Help from "./src/components/Help";
import Instamart from "./src/components/Instamart";
import Signup from "./src/components/Signup";
import Login from "./src/components/Login";
// import Instafood from "./src/utils/Instafood";

const Instafood = lazy(()=> import("./src/components/Instamart"));
// const heading = React.createElement("h1",{},"Namste React")
const AppLayout = () => {
  const [user, setUser] = useState({
    
      name: "Namaste React",
      email: "support@namastedev.com",
   
  })

  return (
    <div>
    <Provider store ={store}>
      <Heading />
      <Outlet/>
      <Footer />
    </Provider>
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    errorElement: <Error/>,
    children:[
      {
        path: "/",
        element: <Body/>
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/help",
        element: <Help/> 
      },
      {
        path: "restra/:id",
        element: <Menue/>
      },
      {
        path: "/instamart",
        element: <Suspense fallback={<Shimmer/>}><Instamart/></Suspense>
        
      },
      {
        path: "/cart",
        element: <Cart/>
      },
      {
        path: "/loginUser",
        element: <Login/>
      },
      {
        path: "/createUser",
        element: <Signup/>
      }
    ],
  },
 
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {appRouter} />);
