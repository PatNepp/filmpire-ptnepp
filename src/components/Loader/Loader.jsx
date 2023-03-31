import { Box, CircularProgress } from '@mui/material';
import React from 'react';

const Loader = ({ size }) => (
  <Box display="flex" justifyContent="center">
    <CircularProgress size={`${size}rem`} />
  </Box>
);

export default Loader;
