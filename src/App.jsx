import Aboutus from "./components/Aboutus";
import {
  Navbar,
  Home,
  About,
  //About,
  //Teacher,
  //Contact,
  //Courses,
  //Footer,
} from "./components/index";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import { BrowserRouter as Router, Switch,Route, Routes,Link } from "react-router-dom";
const Layout = ({ children }) => (
  <>
    <Navbar />
    {children}
  </>
);
function App() {
  return (
    <div className="font-Poppins bg-Solitude">
      
     
      <Router>
      <Routes>
        <Route
          path='/'
          element={
            <Layout>
              <Home />
              <About/>
            </Layout>
          }
        />
        <Route
          path="/aboutus"
          element={
            <Layout>
              <Aboutus />
            </Layout>
          }
        />
       
      </Routes>
    </Router>
      
      {/* <About />
      <Courses />
      <Teacher />
      <Contact />
      <Footer /> */}
    </div>
  );
}

export default App;
