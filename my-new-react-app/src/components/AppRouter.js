import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieList from './MovieList';
import Filter from './Filter';
import AddMovieForm from './AddMovieForm';
import MovieCard from './MovieCard';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/MovieList" element={<MovieList />} />
        <Route path="/Filter" element={<Filter />} />
        <Route path="/AddMovieForm" element={<AddMovieForm />} />
        <Route path="/MovieCard" element={<MovieCard />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
