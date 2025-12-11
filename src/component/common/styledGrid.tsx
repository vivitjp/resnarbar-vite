import styled from '@emotion/styled';
import Grid, { type GridProps } from '@mui/material/Grid';

// Extend MUI Grid so this component accepts all Grid props (container/item, spacing, xs, etc.)
export const GridStyled = styled(Grid) <GridProps>`
  padding: 16px;
  text-align: center;
  background: #f5f5f5;
  border-radius: 0;

  .mui-grid-label {
    font-weight: bold;
    margin-bottom: 8px;
    color: #1976d2;
    font-size: 12px;
  }

  .mui-grid-value {
    font-size: 12px;
    color: #333;
  }
`;

export const GridLabel = styled('div')`
  font-weight: bold;
  margin-bottom: 8px;
  color: #1976d2;
  font-size: 12px;
`;

export const GridValue = styled('div')`
  font-size: 12px;
  color: #333;
`;

export default GridStyled;
