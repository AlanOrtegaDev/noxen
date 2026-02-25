import { HamburgerIcon } from "@/components/icons";
import { UserIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface HomeLayoutProps {
  readonly children: React.ReactNode;
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <>
      <header className="h-19.5 w-full border-b border-border px-4">
        <div className="container mx-auto h-full flex items-center justify-between">
          <Link href="/">
            <Image
              className="h-16 w-auto"
              src="/logo.png"
              alt="Logo"
              priority
              width={700}
              height={700}
            />
          </Link>

          <div className="flex items-center gap-4">
            <UserIcon className="text-icon" size={32} />
            <HamburgerIcon className="text-icon" size={32} />
          </div>
        </div>
      </header>
      <main className="p-4">{children}</main>
      <footer className="px-4">Footer</footer>
    </>
  );
}
