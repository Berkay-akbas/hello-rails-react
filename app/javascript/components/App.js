import React from 'react';
import {
  BrowserRouter, Route, Routes, Link,
} from 'react-router-dom';
import Greeting from './Greeting';

const App = () => (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Greeting />} />
      </Routes>
    </BrowserRouter>
  </>
);

export default App;
