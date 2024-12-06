

const UserTable = () => {
  const users = [
    { id: 1, name: "John Doe", status: "Active" },
    { id: 2, name: "Jane Smith", status: "Inactive" },
    // Add more users here...
  ];

  return (
    <table className="min-w-full table-auto">
      <thead>
        <tr>
          <th className="border-b p-2">User Name</th>
          <th className="border-b p-2">Status</th>
          <th className="border-b p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td className="border-b p-2">{user.name}</td>
            <td className="border-b p-2">{user.status}</td>
            <td className="border-b p-2">
              <button className="text-blue-500">Edit</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
