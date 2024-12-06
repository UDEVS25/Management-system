

const Header = () => {
  return (
    <header className="bg-white shadow flex justify-between items-center p-4">
      <h1 className="text-2xl font-bold text-blue-900">
        HOTEL MANAGEMENT SYSTEM
      </h1>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search..."
          className="p-2 border rounded"
        />
        <button className="text-blue-900 hover:text-blue-700">
          <i className="fas fa-user-circle"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
