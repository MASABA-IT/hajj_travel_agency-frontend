import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Suspense, useEffect } from "react";
import { startLoading, stopLoading } from "../store/slices/loadingSlice";
import FullPageLoader from "../share/FullPageLoader/FullPageLoader";
import Home from "../pages/Home/Home";
import MainLayout from "../layouts/MainLayout";
import UmrahPackages from "../pages/UmrahPackages/UmrahPackages";
import Hajj from "../pages/Hajj/Hajj";
import Facilities from "../pages/Facilities/Facilities";
import Guidance from "../pages/Guidance/Guidance";

const AppRoutes = () => {
  const dispatch = useDispatch();

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Suspense fallback={<FullPageLoader />}>
          <MainLayout />
        </Suspense>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/umrah",
          element: <UmrahPackages />,
        },
        {
          path: "/hajj",
          element: <Hajj />,
        },
        {
          path: "/facilities",
          element: <Facilities />,
        },
        {
          path: "/guidance",
          element: <Guidance />,
        },
      ],
    },
  ]);

  // Trigger loading when the app first launches
  useEffect(() => {
    dispatch(startLoading());

    // Simulate network or loading delay
    const timer = setTimeout(() => {
      dispatch(stopLoading()); // Stop the loading state after 2 seconds
    }, 2000); // You can adjust this timeout or replace it with actual async operations

    return () => clearTimeout(timer); // Cleanup the timeout
  }, [dispatch]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
