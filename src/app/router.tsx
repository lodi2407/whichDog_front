import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AboutUs } from './pages/about-us';
import { FindMyDog } from './pages/find-my-dog';
import { HomePage } from './pages/home-page';
import { DogPage } from './pages/dog';

export const RouterApp = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/dogs' element={<FindMyDog />}></Route>
        <Route path='/dog/:id' element={<DogPage />}></Route>
        <Route path='/aboutUs' element={<AboutUs />}></Route>
      </Routes>
    </Router>
  );
};
