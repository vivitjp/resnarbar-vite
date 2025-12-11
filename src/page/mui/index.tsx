
import React from 'react';
import MuiTooltipSample1 from '../../component/muiTooltip1/Grid';
import MuiTooltipSample2 from '../../component/muiTooltip2/Grid';
import { Box } from '@mui/material';

const MuiIndex: React.FC = () => {
  return (
    <div>
      <MuiTooltipSample1 />
      <MuiTooltipSample2 />
      <Box sx={{ marginTop: 5, padding: 2 }}> Tooltips内の文字選択でコピー </Box>
    </div>
  );
};

export default MuiIndex;
