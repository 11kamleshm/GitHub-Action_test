import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href={"/"} className="flex items-center space-x-2">
            <Image
              src="/Marketti.png"
              width={200}
              height={200}
              alt="Logo"
              className="w-32"
            />
          </Link>
          <Button id="get-started" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-all duration-300 hover:scale-105">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
}
