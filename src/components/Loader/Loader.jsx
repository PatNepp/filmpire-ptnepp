import { Box, CircularProgress } from '@mui/material';
import React from 'react';

const Loader = () => (
  <Box display="flex" justifyContent="center">
    <CircularProgress size="4rem" />
  </Box>
);

export default Loader;
