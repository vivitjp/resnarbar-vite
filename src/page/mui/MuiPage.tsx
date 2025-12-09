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
      <Grid container spacing={2}>
        {columns.map((col) => (
          <Grid item xs={2.4} key={col.id}>
            <Paper className="mui-grid-cell" elevation={3}>
              <div className="mui-grid-label">{col.label}</div>
              <div className="mui-grid-value">{col.value}</div>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
