import React from 'react';
import { Popover, type SxProps } from '@mui/material';

export const columns = [
  { id: 1, label: 'ID', value: '1' },
  { id: 2, label: '名前', value: 'サンプル' },
  { id: 3, label: '年齢', value: '25' },
  { id: 4, label: '職業', value: 'エンジニア' },
  { id: 5, label: '国', value: '日本' },
];

export const tooltipSx: SxProps = {
  bgcolor: 'white',
  color: 'black',
  width: 160,
  height: 100,
  overflow: 'auto',
  whiteSpace: 'pre-line',
  border: '1px solid #ccc',
  borderRadius: 2,
  fontSize: 10,
  boxShadow: '0px 2px 4px rgba(0,0,0,0.1)',
  '&::-webkit-scrollbar': {
    width: '4px'
  },
  scrollbarWidth: 'thin'
};

export interface CommonTooltipProps {
  title: string;
  open: boolean;
  anchorEl: HTMLElement | null;
  onClose: () => void;
  children: React.ReactNode;
  onTooltipMouseEnter?: () => void;
  onTooltipMouseLeave?: () => void;
}

export function CommonTooltip1({ title, open, anchorEl, onClose, children, onTooltipMouseEnter, onTooltipMouseLeave }: CommonTooltipProps) {
  return (
    <>
      {children}
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={onClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        transformOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        PaperProps={{ sx: { ...tooltipSx, userSelect: 'text', pointerEvents: 'auto', zIndex: 1400 } }}
        disableRestoreFocus
      >
        <div
          onMouseEnter={onTooltipMouseEnter}
          onMouseLeave={onTooltipMouseLeave}
          style={{ marginBottom: "30px" }}
        >
          <pre
            style={{ margin: 0, userSelect: 'text', fontFamily: 'inherit', padding: 8 }}
          >{title}</pre>
        </div>
      </Popover>
    </>
  );
}
