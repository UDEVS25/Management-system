
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Users from './pages/users';
import Payments from './pages/Payments';
import Location from './pages/Location';


const App = () => {
  return (
    <Router>
      <div className="flex">
      
        <Sidebar />

        <div className="flex-1">
         
          <Header />

          <div className="p-6">
          
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/users" element={<Users />} />
              <Route path="/payments" element={<Payments />} />
              <Route path="/location" element={<Location />} />
          
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
