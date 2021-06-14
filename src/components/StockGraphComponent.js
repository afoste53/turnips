import { Container } from "react-bootstrap";
import { Line } from "react-chartjs-2";

const StockGraphComponent = ({ prices, labels }) => {
  const data = {
    labels,
    datasets: [
      {
        label: "Price in Bells",
        data: prices,
        fill: false,
        backgroundColor: "cyan",
        borderColor: "black",
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
