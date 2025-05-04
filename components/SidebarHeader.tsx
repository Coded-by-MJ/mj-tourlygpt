import ThemeToggle from "./ThemeToggle";
import { SiOpenaigym } from "react-icons/si";

function SidebarHeader() {
  return (
    <header className="flex w-full items-center mb-4 gap-4 px-4">
      <SiOpenaigym className="w-10 h-10 text-primary" />
      <h2 className="text-xl font-extrabold text-primary mr-auto">TourlyGPT</h2>
      <ThemeToggle />
    </header>
  );
}
export default SidebarHeader;
