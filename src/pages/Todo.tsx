import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import TodoItems from "../components/TodoItems";


function Todo() {
  return <div>
      <div className="bg-[#072951] px-20">
        <Navbar />
      </div>
      <TodoItems/>

      <Newsletter />
      <Footer />
    </div>;

}

export default Todo;
