import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Suspense, useEffect } from "react";
import { startLoading, stopLoading } from "../store/slices/loadingSlice";
import FullPageLoader from "../share/FullPageLoader/FullPageLoader";
import Home from "../pages/Home/Home";
import MainLayout from "../layouts/MainLayout";
import UmrahPackages from "../pages/UmrahPackages/UmrahPackages";
import Hajj from "../pages/Hajj/Hajj";
import Facilities from "../pages/Facilities/Facilities";
import Guidance from "../pages/Guidance/Guidance";
import ManagementBoard from "../components/ManagementBoard/ManagementBoard";
import AboutUsPage from "../pages/AboutUsPage/AboutUsPage";
import AppointmentPage from "../pages/AppointmentPage/AppointmentPage";
import BenefitOfUmrah from "../pages/BenefitOfUmrah/BenefitOfUmrah";
import UmrahLayout from "../layouts/UmrahLayout";
import UmrahPerform from "../pages/UmrahPerform/UmrahPerform";
import UmrahVisaRequirements from "../pages/UmrahVisaRequirements/UmrahVisaRequirements";
import HajjLayout from "../layouts/HajjLayout";
import HajjVisaRequirements from "../pages/HajjVisaRequirements/HajjVisaRequirements";
import HajjPackage from "../pages/HajjPackage/HajjPackage";
import HotelBooking from "../pages/HotelBooking/HotelBooking";
import ZiyaratTours from "../pages/ZiyaratTours/ZiyaratTours";
import AirlineTicketing from "../pages/AirlineTicketing/AirlineTicketing";
import UmrahTraining from "../pages/UmrahTraining/UmrahTraining";
import FacilitiesLayout from "../layouts/FacilitiesLayout";
import GuidanceLayout from "../layouts/GuidanceLayout";
import GuidanceBangla from "../pages/GuidanceBangla/GuidanceBangla";

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
          element: <UmrahLayout />,
          children: [
            {
              path: "",
              element: <UmrahPackages />,
            },
            {
              path: "benefit-of-umrah",
              element: <BenefitOfUmrah />,
            },
            {
              path: "how-to-perform-umrah",
              element: <UmrahPerform />,
            },
            {
              path: "umrah-visa-requirement",
              element: <UmrahVisaRequirements />,
            },
          ],
        },
        {
          path: "/hajj",
          element: <HajjLayout />,
          children: [
            {
              path: "",
              element: <Hajj />,
            },
            {
              path: "hajj-visa-requirements",
              element: <HajjVisaRequirements />,
            },
            {
              path: "hajj-package",
              element: <HajjPackage />,
            },
          ],
        },
        {
          path: "/facilities",
          element: <FacilitiesLayout />,
          children: [
            {
              path: "",
              element: <Facilities />,
            },
            {
              path: "visa-processing",
              element: <Facilities />,
            },
            {
              path: "hotel-booking",
              element: <HotelBooking />,
            },
            {
              path: "ziyarat-tours",
              element: <ZiyaratTours />,
            },
            {
              path: "airline-ticketing",
              element: <AirlineTicketing />,
            },
            {
              path: "umrah-training",
              element: <UmrahTraining />,
            },
          ],
        },
        {
          path: "/guidance",
          element: <GuidanceLayout />,
          children: [
            {
              path: "",
              element: <Guidance />,
            },
            {
              path: "guidance-english",
              element: <Guidance />,
            },
            {
              path: "guidance-bangla",
              element: <GuidanceBangla />,
            },
          ],
        },
        {
          path: "/management-board",
          element: <ManagementBoard />,
        },
        {
          path: "/about-us",
          element: <AboutUsPage />,
        },
        {
          path: "/umrah-appointment",
          element: <AppointmentPage />,
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
