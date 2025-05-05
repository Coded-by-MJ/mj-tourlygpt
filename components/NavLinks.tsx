import Link from "next/link";
import LoadingIndicator from "./LoadingIndicator";

const links = [
  { href: "/chat", title: "Chat" },
  { href: "/tours", title: "Tours" },
  { href: "/tours/new-tour", title: "New Tour" },
  { href: "/profile", title: "Profile" },
];

function NavLinks() {
  return (
    <ul className="menu w-full  text-base-content">
      {links.map((link) => {
        return (
          <li key={link.href}>
            <Link
              href={link.href}
              className="capitalize w-full flex items-center justify-between"
            >
              <span>{link.title}</span>
              <LoadingIndicator />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
export default NavLinks;
