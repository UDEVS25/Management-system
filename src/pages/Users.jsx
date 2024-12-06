
import Card from "../components/Card";
import UserTable from "../components/UserTable";


const Users = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">User Management</h1>

      {/* User Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card
          title="Total Users"
          value={1200}
          bgColor="bg-blue-500"
          icon={<i className="fas fa-users"></i>}
        />
        <Card
          title="Active Users"
          value={1000}
          bgColor="bg-green-500"
          icon={<i className="fas fa-check-circle"></i>}
        />
        <Card
          title="Unverified Users"
          value={200}
          bgColor="bg-yellow-500"
          icon={<i className="fas fa-exclamation-circle"></i>}
        />
      </div>

      {/* User Table */}
      <div className="mt-10 bg-white p-6 rounded shadow-md">
        <h2 className="text-xl font-semibold mb-4">User List</h2>
        <UserTable />
      </div>

      
    </div>
  );
};

export default Users;
