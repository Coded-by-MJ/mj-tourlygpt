import Sidebar from "../../components/Sidebar";
import { FaBarsStaggered } from "react-icons/fa6";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className="drawer-button p-4 flex justify-end items-center lg:hidden "
        >
          <FaBarsStaggered className="w-8 h-8  text-primary" />
        </label>
        <section className="bg-base-200 px-6  w-full flex items-start justify-center py-12 min-h-screen">
          {children}
        </section>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <Sidebar />
      </div>
    </div>
  );
}
export default DashboardLayout;
