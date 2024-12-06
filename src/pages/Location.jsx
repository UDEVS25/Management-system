
import Card from "../components/Card";
import LocationTable from "../components/LocationTable";

const Location = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Manage Locations</h1>
      
      {/* Location Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card
          title="Total Locations"
          value={20}
          bgColor="bg-indigo-500"
          icon={<i className="fas fa-map-marker-alt"></i>}
        />
        <Card
          title="Active Locations"
          value={15}
          bgColor="bg-green-500"
          icon={<i className="fas fa-check-circle"></i>}
        />
        <Card
          title="Inactive Locations"
          value={5}
          bgColor="bg-red-500"
          icon={<i className="fas fa-times-circle"></i>}
        />
      </div>

      {/* Table of Locations */}
      <div className="mt-10 bg-white p-6 rounded shadow-md">
        <h2 className="text-xl font-semibold mb-4">Location List</h2>
        <LocationTable />
      </div>
    </div>
  );
};

export default Location;
