import "./App.css";
import Navigation from "./components/Navigation";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <div className="App">
      <Navigation className="p-2" />
      <HomeScreen />
    </div>
  );
}

export default App;
