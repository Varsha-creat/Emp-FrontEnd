import './App.css';

import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';




import CreateEmployee from './Components/createEmployee';
import HeaderComponent from './Components/HeaderComponent';
import FooterComponent from './Components/FooterComponent';
import EmployeeList from './Components/EmployeeList';




function App() {
  return (
    <div className="App">
      <HeaderComponent/>
      <div className='container'>
      <Routes>
          <Route  path='/' element={<EmployeeList/>}></Route>
          <Route path='/employees/addemp' element={<CreateEmployee/>}></Route>
          <Route path='/employees/:id1' element={<CreateEmployee/>}></Route>
         
         
        </Routes>
        
      </div>
      <FooterComponent/>
     
    </div>
  );
}

export default App;
