import { Container, Grid, Paper } from '@mui/material';
import './MuiPage.css';

const columns = [
  { id: 1, label: 'ID', value: '1' },
  { id: 2, label: '名前', value: 'サンプル' },
  { id: 3, label: '年齢', value: '25' },
  { id: 4, label: '職業', value: 'エンジニア' },
  { id: 5, label: '国', value: '日本' },
];

export default function MuiPage() {
  return (
    <Container maxWidth="md" style={{ marginTop: 40 }}>
      <h2>MUI Grid サンプル</h2>
      <Grid container columns={5} spacing={0} direction="row">
        {columns.map((col) => (
          <Grid size={1} key={col.id} sx={{ height: 100 }}>
            <Paper className="mui-grid-cell" sx={{ width: '50px', padding: 2 }}>
              <div className="mui-grid-label">{col.label}</div>
              <div className="mui-grid-value">{col.value}</div>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
