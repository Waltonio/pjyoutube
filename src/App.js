import { useState } from 'react';

import Header from "./components/header";
import Menu from "./components/menu";
import { useContext} from 'react';
import { UserContext } from './context/userContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Library from './pages/library';
import History from './pages/history';





function App() {

 const {openMenu, setOpenMenu} = useContext(UserContext);


  return (
    <BrowserRouter>
    
        <div className="App">
          
          
          <Header openMenu={openMenu} setOpenMenu={setOpenMenu}/>
          
          <div styled={{width: '100%', display: 'flex'}}>
            <Menu openMenu={openMenu} />
            <div style={{ width: '100%', padding: '50px 70px', boxSizing: 'border-box', display: 'flex', justifyContent: 'center'}}>
              <Routes>
                <Route path='/' element= {<Home />} />
                <Route path='/library' element= {<Library />} />
                <Route path='/history' element= {<History />} />
              </Routes>
            </div>
          
          </div>
        </div>
    </BrowserRouter>
  );

}

export default App;
