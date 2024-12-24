import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../share/Navbar/Navbar";
import Footer from "../share/Footer/Footer";
import { Suspense, useEffect } from "react";
import FullPageLoader from "../share/FullPageLoader/FullPageLoader";

const MainLayout = () => {
  const location = useLocation();

  // Scroll to the top of the page on route change
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar Component */}
      <Navbar />

      {/* Main Content Section */}
      <main className="flex-grow">
        <Suspense fallback={<FullPageLoader />}>
          <Outlet />
        </Suspense>
      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default MainLayout;
