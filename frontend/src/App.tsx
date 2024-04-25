import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import home from "./pages/home/home";
import single from "./pages/Single/single";

function App() {
  return (
    <div className="h-full">
      <Router>
        <Routes>
          <Route path="/" Component={home} />
          <Route path="/:id" Component={single} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
