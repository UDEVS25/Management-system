import { Link } from "react-router-dom";  // Import Link from React Router

const Sidebar = () => {
  return (
    <div className="w-64 bg-blue-700 text-white min-h-screen p-6">
      <h1 className="text-xl font-bold">Hotel Management</h1>
      <nav className="mt-10">
        <ul>
        <li>
            <Link to="/dashboard" className="block py-2 hover:bg-blue-800">
              Dashboard
            </Link>
            </li>
          <li>
            <Link to="/users" className="block py-2 hover:bg-blue-800">
              Users
            </Link>
          </li>
          <li>
            <Link to="/location" className="block py-2 hover:bg-blue-800">
              Location
            </Link>
          </li>
          <li>
            <Link to="/payments" className="block py-2 hover:bg-blue-800">
              Payments
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
