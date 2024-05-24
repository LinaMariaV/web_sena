import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import NavigationBar from "../../components/NavigationBar";
import NavigationBarHome from "../../components/NavigationBarHome";
import Footer from "../../components/Footer";

function Layout() {
  let location = useLocation();
  if (location.pathname === "/") {
    return (
      <>
        <NavigationBarHome />
        <Outlet />
        <Footer />
      </>
    );
  }
  return (
    <>
      <NavigationBar className="bg-body-tertiary fixed-top" />
      <div className="container" style={{ padding: "10px", marginTop: "56px" }}>
        <Outlet />
      </div>

      <Footer />
    </>
  );
}

export default Layout;
