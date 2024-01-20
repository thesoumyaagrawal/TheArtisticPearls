import './App.css';
// import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import LoginSignup from './pages/LoginSignup/Login.jsx';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <div className='App'>
        {/* This is the alias of BrowserRouter i.e. Router */}
        <Router>
            <Routes>
                {/* This route is for home component 
      with exact path "/", in component props 
      we passes the imported component*/}
      {/*by default page will be home page*/}
                <Route index element={<LoginSignup />} /> 
                <Route path="/home" element={<Home />} /> 
                <Route path="/login" element={<LoginSignup />} /> 
              

                {/* If any route mismatches the upper 
      route endpoints then, redirect triggers 
      and redirects app to home component with to="/" */}
                {/* <Redirect to="/" /> */} 
                <Route
                    path="*"
                    element={<Navigate to="/" />}
                />
            </Routes>
        </Router>
    </div>
);
}

export default App;
