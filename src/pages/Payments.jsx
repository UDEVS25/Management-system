
import Card from "../components/Card";
import PaymentHistory from "../components/PaymentHistory";

const Payments = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Payments Overview</h1>

      {/* Payment Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card
          title="Total Payments"
          value={50000}
          bgColor="bg-blue-500"
          icon={<i className="fas fa-credit-card"></i>}
        />
        <Card
          title="Pending Payments"
          value={5000}
          bgColor="bg-orange-500"
          icon={<i className="fas fa-clock"></i>}
        />
        <Card
          title="Completed Payments"
          value={45000}
          bgColor="bg-green-500"
          icon={<i className="fas fa-check-circle"></i>}
        />
      </div>

      {/* Payment History Table */}
      <div className="mt-10 bg-white p-6 rounded shadow-md">
        <h2 className="text-xl font-semibold mb-4">Payment History</h2>
        <PaymentHistory />
      </div>

     
    </div>
  );
};

export default Payments;
