import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, BrowserRouter as Router, Link } from "react-router-dom";
import SuperHeroes from "./components/SuperHeroes";
import RQSuperHeroes from "./components/RQSuperHeroes";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/super-heroes">SuperHeroes</Link>
            </li>

            <li>
              <Link to="/rq-super-heroes">RQSuperHeroes</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/super-heroes" element={<SuperHeroes />} />
          <Route path="/rq-super-heroes" element={<RQSuperHeroes />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
