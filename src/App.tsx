import { HashRouter, Route, Routes } from 'react-router-dom';

import { Component } from '@components/index';

const App = () => (
  <HashRouter>
    <Routes>
      <Route element={<Component hello={'Hello'} />} path="/" />
    </Routes>
  </HashRouter>
);

export default App;
