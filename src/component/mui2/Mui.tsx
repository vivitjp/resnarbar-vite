import { Container, Grid, Paper } from '@mui/material';
import { useState } from 'react';
import { columns, CommonTooltip } from './Tooltip';
import './Mui.css';

export default function Mui1() {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [isCellEntered, setIsCellEntered] = useState(false);
  const [isTooltipEntered, setIsTooltipEntered] = useState(false);

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
                title={columns.map(c => `${c.label}:\n  ${c.value}`).join('\n\n')}
                open={!!anchorEl && (isCellEntered || isTooltipEntered)}
                anchorEl={anchorEl}
                onClose={() => setAnchorEl(null)}
                onTooltipMouseEnter={() => setIsTooltipEntered(true)}
                onTooltipMouseLeave={() => setIsTooltipEntered(false)}
              >
                <Paper
                  className="mui-grid-cell"
                  sx={{ width: '50px', padding: 2 }}
                  onMouseEnter={(e) => {
                    setAnchorEl(e.currentTarget);
                    setIsCellEntered(true);
                    setIsTooltipEntered(true)
                  }}
                  onMouseLeave={() => {
                    setIsCellEntered(false);
                    setIsTooltipEntered(true)
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
