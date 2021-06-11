import StockGraphComponent from "../components/StockGraphComponent";

const HomeScreen = () => {
  const prices = [90, 95, 100, 150, 90, 95];
  return (
    <div>
      <StockGraphComponent prices={prices} />
    </div>
  );
};

export default HomeScreen;
