
import { Bar, Pie } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from "chart.js";

// Register necessary chart elements with Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const ChartContainer = () => {
  // Data for Bar Chart (Monthly Report)
  const barChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Total Payment",
        data: [45, 30, 60, 35, 55, 40],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "Total Withdraw",
        data: [30, 40, 20, 50, 30, 45],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Data for Pie Chart (Login by Browser)
  const pieChartData = {
    labels: ["Chrome", "Firefox", "Safari", "Edge", "Other"],
    datasets: [
      {
        data: [60, 20, 10, 5, 5],
        backgroundColor: ["#ff6384", "#36a2eb", "#cc65fe", "#ffce56", "#ff944d"],
      },
    ],
  };

 
  const pieChartDataOS = {
    labels: ["Windows", "Mac", "Linux", "Others"],
    datasets: [
      {
        data: [70, 20, 5, 5],
        backgroundColor: ["#ff6384", "#36a2eb", "#cc65fe", "#ffce56"],
      },
    ],
  };

  return (
    <div className="grid grid-cols-2 gap-6">
      <div className="card p-4 bg-white shadow-md">
        <h3 className="text-lg font-semibold">Monthly Report</h3>
        <Bar data={barChartData} />
      </div>
      <div className="card p-4 bg-white shadow-md">
        <h3 className="text-lg font-semibold">Browser Usage</h3>
        <Pie data={pieChartData} />
      </div>
      <div className="card p-4 bg-white shadow-md">
        <h3 className="text-lg font-semibold">OS Usage</h3>
        <Pie data={pieChartDataOS} />
      </div>
    </div>
  );
};

export default ChartContainer;
