import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import { type SxProps } from '@mui/material';

const defaultTooltipSx: SxProps = {
  bgcolor: 'white',
  color: 'black',
  maxWidth: 200,
  whiteSpace: 'pre-line',
  overflow: 'auto',
  boxShadow: '0 2px 6px rgba(0,0,0,0.12)',
  borderRadius: 1,
  pointerEvents: 'auto',
  zIndex: 1400,
};

export interface BasicTooltipProps {
  title: React.ReactNode;
  children: React.ReactNode;
  followCursor?: boolean;
  open?: boolean;
  onClose?: (event?: React.SyntheticEvent | Event | null, reason?: string) => void;
  sx?: SxProps;
  arrow?: boolean;
}

export default function BasicTooltip({ title, children, followCursor = false, open, onClose, sx, arrow = false }: BasicTooltipProps) {
  return (
    <Tooltip
      title={title}
      open={open}
      onClose={onClose}
      disableFocusListener
      disableTouchListener
      enterDelay={0}
      leaveDelay={0}
      followCursor={followCursor}
      // interactive prop removed to satisfy Tooltip prop types; pointerEvents enabled via slotProps
      arrow={arrow}
      slotProps={{
        tooltip: {
          sx: { ...(defaultTooltipSx as object), ...(sx as object) },
        },
        arrow: {
          sx: { color: (defaultTooltipSx as any).bgcolor }
        }
      }}
    >
      {React.isValidElement(children) ? children : <span>{children}</span>}
    </Tooltip>
  );
}