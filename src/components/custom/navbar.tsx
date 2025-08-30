import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-blue-900">NewsTopLink</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#"
              className="text-gray-700 hover:text-blue-900 px-3 py-2 text-sm font-medium transition-colors"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-900 px-3 py-2 text-sm font-medium transition-colors"
            >
              Politics
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-900 px-3 py-2 text-sm font-medium transition-colors"
            >
              Technology
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-900 px-3 py-2 text-sm font-medium transition-colors"
            >
              Sports
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-900 px-3 py-2 text-sm font-medium transition-colors"
            >
              Entertainment
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-900 px-3 py-2 text-sm font-medium transition-colors"
            >
              World
            </a>
          </nav>

          {/* Search and Icons */}
          <div className="flex items-center space-x-4">
            <Menu className="md:hidden h-6 w-6 text-gray-600 hover:text-blue-900 cursor-pointer" />
          </div>
        </div>
      </div>
    </nav>
  );
}
