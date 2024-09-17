import { Routes, Route } from "react-router-dom"; // Only import Routes and Route
import Home from "./component/Home"; // Import the Home component
import "./App.css";

function App() {
  return (
    <div className="app">
      {/* Define Routes */}
      <Routes>
        {/* Home Route */}
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
