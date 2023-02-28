import React from 'react';
import ReactDOM from 'react-dom/client';
import ListPage from './page/ListPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ListPage />
  </React.StrictMode>
);

