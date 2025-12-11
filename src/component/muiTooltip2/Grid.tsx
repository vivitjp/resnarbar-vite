import { Box, Container, Paper } from '@mui/material';
import GridStyled, { GridLabel, GridValue } from '../common/styledGrid';
import BasicTooltip from './Tooltip';

const columns = [
  { id: 1, label: 'ID', value: '1' },
  { id: 2, label: '名前', value: 'サンプル' },
  { id: 3, label: '年齢', value: '25' },
  { id: 4, label: '職業', value: 'エンジニア' },
  { id: 5, label: '国', value: '日本' },
];

const title = columns.map(c => `${c.label}:\n  ${c.value}`).join('\n\n');

export default function Mui1() {
  return (
    <Container maxWidth="md" style={{ marginTop: 40 }}>
      <h2>MUI Tooltip セル統合(国除外) サンプル</h2>
      <Box sx={{ display: 'flex', gap: 0 }}>
        <BasicTooltip
          title={title}
          arrow
          width={"160px"}
          height={"140px"}
          multiline={true}
          followCursor={false}
        >
          <GridStyled
            container
            columns={4}
            spacing={0}
            direction="row"
            gap={0}
          >
            {columns.slice(0, 4).map((col) => {
              return (
                <GridStyled
                  size={1}
                  key={col.id}
                  data-id={col.id}
                  gap={0}
                >
                  <Paper
                    className="mui-grid-cell"
                    sx={{ width: '50px', padding: 2, margin: 0 }}
                  >
                    <div className="mui-grid-label">{col.label}</div>
                    <div className="mui-grid-value">{col.value}</div>
                  </Paper>
                </GridStyled>
              );
            })}
          </GridStyled>
        </BasicTooltip>
        <GridStyled
          container
          columns={4}
          spacing={0}
          direction="row"
          gap={0}
        >
          {columns.slice(4, 6).map((col) => {
            return (
              <GridStyled
                size={1}
                key={col.id}
                // sx={{ height: 100 }}
                data-id={col.id}
                gap={0}
              >
                <Paper
                  className="mui-grid-cell"
                  sx={{ width: '50px', padding: 2, margin: 0 }}
                >
                  <GridLabel className="mui-grid-label">{col.label}</GridLabel>
                  <GridValue className="mui-grid-value">{col.value}</GridValue>
                </Paper>
              </GridStyled>
            );
          })}
        </GridStyled>
      </Box>
    </Container>
  );
}
