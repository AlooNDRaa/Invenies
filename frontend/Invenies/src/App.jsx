import '../src/app.css'
import Home from './components/home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardsCompanies from './pages/companiCards';
import AllowYourCompany from './components/form';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/companies' element={<CardsCompanies/>}/>
        <Route path='/form' element={<AllowYourCompany/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
