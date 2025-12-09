import { Container, Grid, Paper, Tooltip } from '@mui/material';
import './MuiPage.css';

const columns = [
  { id: 1, label: 'ID', value: '1' },
  { id: 2, label: '名前', value: 'サンプル' },
  { id: 3, label: '年齢', value: '25' },
  { id: 4, label: '職業', value: 'エンジニア' },
  { id: 5, label: '国', value: '日本' },
];

export default function MuiPage() {
  const tooltipText = `ID: ${columns[0].value}\n名前: ${columns[1].value}\n年齢: ${columns[2].value}\n職業: ${columns[3].value}`;

  return (
    <Container maxWidth="md" style={{ marginTop: 40 }}>
      <h2>MUI Grid サンプル</h2>
      <Grid container columns={5} spacing={0} direction="row">
        {columns.map((col) => (
          <Grid size={1} key={col.id} sx={{ height: 100 }}>
            <Tooltip
              title={tooltipText}
              placement="top-start"
              slotProps={{
                tooltip: {
                  sx: {
                    bgcolor: 'white',
                    color: 'black',
                    width: 100,
                    height: 30,
                    overflow: 'auto',
                    whiteSpace: 'pre-line',
                    border: '1px solid #ccc',
                    borderRadius: 0,
                  },
                },
              }}
            >
              <Paper className="mui-grid-cell" sx={{ width: '50px', padding: 2 }}>
                <div className="mui-grid-label">{col.label}</div>
                <div className="mui-grid-value">{col.value}</div>
              </Paper>
            </Tooltip>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
