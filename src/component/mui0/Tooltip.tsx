import React from 'react';
import { Tooltip, type SxProps } from '@mui/material';

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
  title: React.ReactNode;
  open: boolean;
  onClose: (event?: React.SyntheticEvent | Event | null, reason?: string) => void;
  children: React.ReactElement;
  onTooltipMouseEnter?: (event?: React.MouseEvent) => void;
  onTooltipMouseLeave?: (event?: React.MouseEvent) => void;
  followCursor?: boolean;
}
export function CommonTooltip({ title, open, onClose, children, onTooltipMouseEnter, onTooltipMouseLeave, followCursor }: CommonTooltipProps) {
  return (
    <Tooltip
      title={<pre style={{ margin: 0, userSelect: 'text', fontFamily: 'inherit', padding: 8 }}>{title}</pre>}
      open={open}
      onClose={onClose}
      disableFocusListener
      disableTouchListener
      enterDelay={0}
      leaveDelay={0}
      followCursor={!!followCursor}
      slotProps={{
        tooltip: {
          sx: { ...tooltipSx, pointerEvents: 'auto', zIndex: 1400 },
          onMouseEnter: onTooltipMouseEnter,
          onMouseLeave: onTooltipMouseLeave,
        }
      }}
    >
      {children}
    </Tooltip>
  );
}
