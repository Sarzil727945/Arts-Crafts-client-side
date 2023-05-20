import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Main/Main';
import Home from './components/Home/Home';
import ErrorPage from './components/ErrorPage';
import Register from './components/Register/Register';
import AuthProvider from './AuthProvider/AuthProvider';
import Login from './components/Login/Login';
import Blog from './components/Blog/Blog';
import AddToy from './components/AddToy/AddToy';
import MyToys from './components/MyToys/MyToys';
import UpdateToy from './components/UpDateToy/UpDateToy';
import AllToys from './components/AllToys/AllToys';
import ViewDetails from './components/ViewDetails/ViewDetails';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import TabDetails from './components/Home/ReactTab/TabDetails/TabDetails';
<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/addToy",
        element: <AddToy></AddToy>
      },
      {
        path: "/myToys",
        element: <MyToys></MyToys>
      },
      {
        path: "/allToys",
        element: <AllToys></AllToys>
      },
      {
        path: '/tab1Details/:id',
        element: <PrivateRoute><TabDetails></TabDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`https://assignment11-server-site-delta.vercel.app/Toy/${params.id}`)
      },
      {
        path: '/details/:id',
        element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`https://assignment11-server-site-delta.vercel.app/Toy/${params.id}`)
      },
      {
        path: "myToys/updateToy/:id",
        element: <UpdateToy></UpdateToy>,
        loader: ({ params }) => fetch(`https://assignment11-server-site-delta.vercel.app/Toy/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
