
const LocationTable = () => {
  const locations = [
    { id: 1, name: "New York", status: "Active" },
    { id: 2, name: "Los Angeles", status: "Inactive" },
    { id: 3, name: "Chicago", status: "Active" },
  
  ];

  return (
    <table className="min-w-full table-auto">
      <thead>
        <tr>
          <th className="border-b p-2">Location Name</th>
          <th className="border-b p-2">Status</th>
          <th className="border-b p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {locations.map((location) => (
          <tr key={location.id}>
            <td className="border-b p-2">{location.name}</td>
            <td className="border-b p-2">{location.status}</td>
            <td className="border-b p-2">
              <button className="text-blue-500">Edit</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default LocationTable;
