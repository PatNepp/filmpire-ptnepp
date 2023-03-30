import React, { useState, useEffect } from 'react';
import { Box, CircularProgress, useMediaQuery, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

import { selectGenreOrCategory } from '../../features/currentGenreOrCategory';

import { useGetMoviesQuery } from '../../services/TMDB';
import MovieList from '../MovieList/MovieList';
import Loader from '../Loader/Loader';

const Movies = () => {
  const [page, setPage] = useState(1);
  const { genreIdOrCategoryName } = useSelector((state) => state.currentGenreOrCategory);
  const { data, error, isFetching } = useGetMoviesQuery({ genreIdOrCategoryName, page });
  console.log(data);

  if (isFetching) {
    return (
      <Loader />
    );
  }

  if (!data.results.length) {
    return (
      <Box display="flex" alignItems="center" mt="240px">
        <Typography>
          No movies match that name
          <br />
          Please search for something else
        </Typography>
      </Box>
    );
  }

  if (error) return 'an error has occured';

  return (
    <div>
      <MovieList movies={data} />
    </div>
  );
};

export default Movies;
