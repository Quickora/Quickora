import React from 'react'
import UserLayout from './components/layout/UserLayout';
import {BrowserRouter,Route, Routes} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          {/*user Layout*/}{" "}
        </Route>
        <Route>{/*admin layout*/}</Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App