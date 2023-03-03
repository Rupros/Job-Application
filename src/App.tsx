import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import AddPage from './page/AddPage';
import ListPage from './page/ListPage';

import config from './config';

function App() {
  return (
    <Router>
        <Routes>
            <Route path={config.listPath} element={<ListPage />} />
            <Route path={config.addPath}  element={<AddPage />} />
        </Routes>
    </Router>
  );
}

export default App;
