import { Container, Grid, Paper } from '@mui/material';
import { useState, useCallback } from 'react';
import { columns, CommonTooltip } from '../../common/Tooltip';
import './Mui1.css';

export default function Mui1() {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [cellHovered, setCellHovered] = useState(false);
  const [tooltipHovered, setTooltipHovered] = useState(false);

  // const [isCursonOnEffectiveArea, setIsCursonOnEffectiveArea] = useState(false);

  const handleClose = useCallback(() => {
    if (!cellHovered && !tooltipHovered) {
      setAnchorEl(null);
    }
  }, [cellHovered, tooltipHovered]);

  return (
    <Container maxWidth="md" style={{ marginTop: 40 }}>
      <h2>MUI Grid パラパラ サンプル</h2>
      <Grid
        container
        columns={5}
        spacing={0}
        direction="row"
      >
        {columns.map((col) => {
          return (
            <Grid size={1} key={col.id} sx={{ height: 100 }} data-id={col.id}>
              <CommonTooltip
                title={`ID: ${col.id}\n${col.label}: ${col.value}`}
                open={!!anchorEl && (cellHovered || tooltipHovered)}
                anchorEl={anchorEl}
                onClose={handleClose}
                onTooltipMouseEnter={() => setTooltipHovered(true)}
                onTooltipMouseLeave={() => {
                  setTooltipHovered(false);
                  handleClose();
                }}
              >
                <Paper
                  className="mui-grid-cell"
                  sx={{ width: '50px', padding: 2 }}
                  onMouseEnter={(e) => {
                    setAnchorEl(e.currentTarget);
                    setCellHovered(true);
                  }}
                  onMouseLeave={() => {
                    setCellHovered(false);
                    handleClose();
                  }}
                >
                  <div className="mui-grid-label">{col.label}</div>
                  <div className="mui-grid-value">{col.value}</div>
                </Paper>
              </CommonTooltip>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
