import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import AddPage from './page/AddPage';
import ListPage from './page/ListPage';
import NotFoundPage from './page/NotFoundPage';

import config from './config';

function App() {
  return (
    <Router>
        <Routes>
            <Route path={config.listPath} element={<ListPage/>} />
            <Route path={config.addPath}  element={<AddPage/>} />

            <Route path='*' element={<NotFoundPage/>}/>
        </Routes>
    </Router>
  );
}

export default App;
