import StockGraphComponent from "./StockGraphComponent";

const StockTickerComponent = (props) => {
  const prices = [90, 95, 100, 150, 90, 95];
  return (
    <div>
      <StockGraphComponent prices={prices} />
    </div>
  );
};

export default StockTickerComponent;
