import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import Register from "./Register";
import Diplomas from "./Diplomas";
import Diploma from "./Diploma";
import Header from "./Header";
import Module from "./Module";

function App() {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element={<Home title="Home" />} />
        <Route path="diplomas" element={<Diplomas />}>
          <Route path=":diplomaId" element={<Diploma />} />
          <Route path=":moduleId" element={<Module />} />
        </Route>
        <Route path="register" element={<Register />} />
        <Route
          path="*"
          element={<h1 className="not-found">Page Not Found</h1>}
        />
      </Routes>

      <footer className="container">
        &copy;2024 | <a href="https://www.rp.edu.sg/schools-courses">Republic Polytechnic</a>
      </footer>
    </div>
  );
}

export default App;
