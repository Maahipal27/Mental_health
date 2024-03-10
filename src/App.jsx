import Aboutus from "./components/Aboutus";

import FeedBack from "./components/Feedback";
import {
  Navbar,
  Home,
  About,
  Contact,
 
  
  Footer,

  Professionals,
} from "./components/index";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Layout = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer/>
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
              <Contact/>
             
             
             
             
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
        <Route
          path="/feedback"
          element={
            <Layout>
              <FeedBack />
            </Layout>
          }
        />
         <Route
          path="/interactwithus"
          element={
            <Layout>
              <About/>
            </Layout>
          }
        />
        <Route
          path="/professionals"
          element={
            <Layout>
             <Professionals/>
            </Layout>
          }
        />
       
      </Routes>
    </Router>
      
     
    </div>
  );
}

export default App;
