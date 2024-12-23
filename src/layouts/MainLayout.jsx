import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../share/Navbar/Navbar";
import Footer from "../share/Footer/Footer";
import { Suspense, useEffect } from "react";
import FullPageLoader from "../share/FullPageLoader/FullPageLoader";

const MainLayout = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);
  return (
    <div>
      <Navbar />
      <main>
        <Suspense fallback={<FullPageLoader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
