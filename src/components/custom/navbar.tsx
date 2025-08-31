import { Menu } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={"/"}>
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-blue-900">NewsTopLink</h1>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}
