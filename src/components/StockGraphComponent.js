import { Container } from "react-bootstrap";
import { Line } from "react-chartjs-2";
import annotationPlugin from "chartjs-plugin-annotation";

const StockGraphComponent = ({ prices }) => {
  const purchasePrice = prices[0];

  const data = {
    labels: [
      "Sunday",
      "Mon AM",
      "Mon PM",
      "Tues AM",
      "Tues PM",
      "Wed AM",
      "Wed PM",
      "Thurs AM",
      "Thurs PM",
      "Fri AM",
      "Fri PM",
      "Sat Am",
      "Sat PM",
    ],
    datasets: [
      {
        label: "Price in Bells",
        data: prices,
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
      },
    ],
  };

  const options = {
    maintainAspectRation: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <Container>
      <Line data={data} height={60} width={150} options={options} />
    </Container>
  );
};

export default StockGraphComponent;
