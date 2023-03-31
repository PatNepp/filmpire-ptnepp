import React from 'react';
import { Grid } from '@mui/material';

import useStyles from './styles';
import Movie from '../Movie/Movie';

const MovieList = ({ movies, listType }) => {
  const classes = useStyles();
  const numOfMovies = listType && 8;

  return (
    <Grid container className={classes.moviesContainer}>
      {movies.results.slice(0, numOfMovies).map((movie, index) => (
        <Movie key={index} movie={movie} index={index} listType={listType} />
      ))}
    </Grid>
  );
};

export default MovieList;
