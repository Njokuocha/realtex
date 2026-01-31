// import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './inventory/intro/Landing';
import TypeSelect from './inventory/intro/TypeSelect';
import Login from './inventory/intro/Login';
import Dashboard from './inventory/dashboard/Dashboard';
import { ScanAddProduct } from './inventory/dashboard/canvas/AddProduct';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/user/typeselect" element={<TypeSelect />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/products/scan/qrcode/add' element={<ScanAddProduct />} />
      </Routes>
    </Router>
  );
}

export default App;

// function App() {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path='/auth/login' element={<Login />} />
//         <Route path='/account/signup' element={<Signup />} />
//       </Routes>
//     </Router>
//   );
// }


