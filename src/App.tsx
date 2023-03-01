import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import AddPage from './page/AddPage';
import ListPage from './page/ListPage';

function App() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<ListPage />} />
            <Route path='/add-products' element={<AddPage />} />
        </Routes>=
    </Router>
  );
}

export default App;
