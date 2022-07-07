import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Etusivu from './etusivu.js';
import Kys from './kys.js';
import Tul from './tul.js';
import Pal from './pal.js';
import Layout from './layout.js';

function App() {
  return (
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
            <Route index element={<div><Etusivu /></div>} />
            <Route path="Kys" element={<div><Kys /></div>} />
            <Route path="Tul" element={<div><Tul /></div>} />
            <Route path="Pal" element={<div><Pal /></div>} />

            </Route>
          </Routes>
        </BrowserRouter>
  );
}

export default App;
