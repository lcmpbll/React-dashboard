import React from 'react';
import GeographicChart from '../../components/Geo';
import Header from '../../components/Header';
import { Box } from '@mui/material';
import { tokens } from '../../theme';
import { useTheme } from '@mui/material';


const Geo = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box>
      <Header title='Geograpic Chart' subtitle='Simple Geographic Chart'/>
      <Box height='75vh' border={`1px solid ${colors.grey[100]}`} borderRadius='4px'>
        <GeographicChart/>
      </Box>
    </Box>
  )
}

export default Geo;