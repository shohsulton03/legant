import SubHeader from "@/components/SubHeader";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";

const Layout = () => {
  return (
    <>
      <SubHeader />
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
