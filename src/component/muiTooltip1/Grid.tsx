import { Container, Paper } from '@mui/material';
import BasicTooltip from '../common/Tooltip';
import GridStyled, { GridLabel, GridValue } from '../common/styledGrid';
import { title, columns } from '../common/data';

export default function Mui1() {
  return (
    <Container maxWidth="md" style={{ marginTop: 40 }}>
      <h2>MUI Tooltip パラパラ サンプル</h2>
      <GridStyled
        container
        columns={5}
        spacing={0}
        direction="row"
        gap={0}
      >
        {columns.map((col) => {
          return (
            <GridStyled
              size={1}
              key={col.id}
              data-id={col.id}
              gap={0}
            >
              <BasicTooltip
                title={title}
                arrow
                width={"160px"}
                height={"140px"}
                multiline={true}
                followCursor={false}
              >
                <Paper
                  className="mui-grid-cell"
                  sx={{ width: '50px', padding: 2, margin: 0 }}
                >
                  <GridLabel className="mui-grid-label">{col.label}</GridLabel>
                  <GridValue className="mui-grid-value">{col.value}</GridValue>
                </Paper>
              </BasicTooltip>
            </GridStyled>
          );
        })}
      </GridStyled>
    </Container>
  );
}
