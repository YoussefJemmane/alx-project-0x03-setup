import Link from "next/link";
import Button from "../common/Button";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Splash App
        </Link>
        
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-700 hover:text-blue-600">
            Home
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-600">
            About
          </Link>
          <Link href="/posts" className="text-gray-700 hover:text-blue-600">
            Posts
          </Link>
          <Link href="/users" className="text-gray-700 hover:text-blue-600">
            Users
          </Link>
        </nav>

        <div className="flex space-x-2">
          <Button title="Sign In" size="small" />
          <Button title="Sign Up" size="small" />
        </div>
      </div>
    </header>
  );
};

export default Header;
