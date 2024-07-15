import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.svg";
import Theme from "./Theme";
import UnmountStudio from "./Unmount";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const data = [
    {
      title: "LinkedIn",
      href: "/linkedin",
    },
    {
      title: "Copy email",
      href: "/email",
    },
    {
      title: "Read.cv",
      href: "/readcv",
    },
  ];

  return (
    <UnmountStudio>
      <header className="text-sm py-6 md:px-16 px-6 border-b dark:border-zinc-800 border-zinc-200 z-30 md:mb-28 mb-10">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/">
            <Image src={Logo} width={35} height={35} alt="logo" />
          </Link>

          <nav className="md:block hidden flex-grow">
            <ul className="flex items-center justify-end gap-x-8">
              {data.map((link, id) => (
                <li key={id} className={id === data.length - 1 ? 'mr-8' : ''}> {/* Add margin to the last link */}
                  <Link
                    href={link.href}
                    className="font-incognito dark:text-[#E4E4DC] text-zinc-600 dark:hover:text-[#999994] hover:text-zinc-900 duration-300 text-base flex items-center"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-x-4">
            <Theme />
            <MobileMenu />
          </div>
        </div>
      </header>
    </UnmountStudio>
  );
}
