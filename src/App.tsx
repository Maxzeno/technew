import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Todo from "./pages/Todo";

function App() {
  return (
    <div className="font-montserrat">
      <Router basename="/technew">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/todo' element={<Todo />} />
        </Routes>
      </Router>
    </div>
        
  );
}

export default App;
