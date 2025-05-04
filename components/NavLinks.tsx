import Link from "next/link";

const links = [
  { href: "/chat", title: "Chat" },
  { href: "/tours", title: "Tours" },
  { href: "/tours/new-tour", title: "New Tour" },
  { href: "/profile", title: "Profile" },
];

function NavLinks() {
  return (
    <ul className="menu  text-base-content">
      {links.map((link) => {
        return (
          <li key={link.href}>
            <Link href={link.href} className="capitalize">
              {link.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
export default NavLinks;
