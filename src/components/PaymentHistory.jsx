
const PaymentHistory = () => {
  const payments = [
    { id: 1, date: "2024-11-01", amount: "$500", status: "Completed" },
    { id: 2, date: "2024-11-05", amount: "$200", status: "Pending" },
   
  ];

  return (
    <table className="min-w-full table-auto">
      <thead>
        <tr>
          <th className="border-b p-2">Date</th>
          <th className="border-b p-2">Amount</th>
          <th className="border-b p-2">Status</th>
        </tr>
      </thead>
      <tbody>
        {payments.map((payment) => (
          <tr key={payment.id}>
            <td className="border-b p-2">{payment.date}</td>
            <td className="border-b p-2">{payment.amount}</td>
            <td className="border-b p-2">{payment.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PaymentHistory;
