import SidebarHeader from "./SidebarHeader";
import NavLinks from "./NavLinks";
import MemberProfile from "./MemberProfile";

function Sidebar() {
  return (
    <div className="px-4 grid-cols-1 w-80 min-h-full bg-base-300 py-12 grid grid-rows-[auto_1fr_auto] ">
      {/* first row */}
      <SidebarHeader />
      {/* second row */}
      <NavLinks />
      {/* third row */}
      <MemberProfile />
    </div>
  );
}
export default Sidebar;
