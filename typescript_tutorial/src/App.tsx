import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './Layout/MainLayout';
import { Basic } from './Pages/Basic';

function App() {
  


  return (
    <div >
        <BrowserRouter>
          <Routes>
          <Route path='/' element={<MainLayout/>}>
              <Route index element={<Basic/>}/>
          </Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
