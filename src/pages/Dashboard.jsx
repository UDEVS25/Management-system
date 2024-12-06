
import Card from "../components/Card";
import ChartContainer from "../components/ChartContainer";

const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <Card
          title="Total Users"
          value={16}
          bgColor="bg-purple-500"
          icon={<i className="fas fa-users"></i>}
        />
        <Card
          title="Total Verified Users"
          value={16}
          bgColor="bg-green-500"
          icon={<i className="fas fa-check-circle"></i>}
        />
        <Card
          title="Total Email Unverified Users"
          value={6}
          bgColor="bg-orange-500"
          icon={<i className="fas fa-envelope"></i>}
        />
        <Card
          title="Total SMS Unverified Users"
          value={0}
          bgColor="bg-red-500"
          icon={<i className="fas fa-sms"></i>}
        />
      </div>

      {/* Chart Section */}
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartContainer title="Monthly Payment & Withdraw Report">
          <p>Chart content goes here...</p>
        </ChartContainer>
       
      </div>
    </div>
  );
};

export default Dashboard;
