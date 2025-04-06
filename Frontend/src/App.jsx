import React from 'react'
import UserLayout from './components/layout/UserLayout';
import {BrowserRouter,Route, Routes} from "react-router-dom";
import Home from './pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home/>}/>
          {/*user Layout*/}
        </Route>
        <Route>{/*admin layout*/}</Route>
      </Routes> 
    </BrowserRouter>
  );
};

export default App