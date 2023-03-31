import React from 'react';
import { Grid } from '@mui/material';

import useStyles from './styles';
import Movie from '../Movie/Movie';

const MovieList = ({ movies, numOfMovies }) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.moviesContainer}>
      {movies.results.slice(0, numOfMovies).map((movie, index) => (
        <Movie key={index} movie={movie} index={index} />
      ))}
    </Grid>
  );
};

export default MovieList;
