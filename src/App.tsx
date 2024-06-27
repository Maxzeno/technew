import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Todo from "./pages/Todo";


function App() {
  return (
    <div className="font-montserrat">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </BrowserRouter>
    </div>
        
  );
}

export default App;
