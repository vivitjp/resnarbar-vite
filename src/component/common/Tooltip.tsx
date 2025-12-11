import * as React from 'react';
import Box, { type BoxProps } from '@mui/material/Box';
import Tooltip, { type TooltipProps } from '@mui/material/Tooltip';
import { type Instance } from '@popperjs/core';

interface BasicTooltipProps extends Omit<TooltipProps, 'slotProps'> {
  boxProps?: BoxProps;
  slotProps?: any;
  width?: number | string;
  height?: number | string;
  multiline?: boolean;
  followCursor?: boolean;
}

export default function BasicTooltip({ children, boxProps, placement = 'top', arrow = true, ...tooltipProps }: BasicTooltipProps) {
  const positionRef = React.useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const popperRef = React.useRef<Instance | null>(null);
  const areaRef = React.useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (event: React.MouseEvent) => {
    positionRef.current = { x: event.clientX, y: event.clientY };

    if (popperRef.current != null) {
      popperRef.current.update();
    }
  };

  const { title: rawTitle, slotProps: incomingSlotProps, width, height, multiline = false, followCursor = false, ...rest } = tooltipProps as any;

  const mergedSlotProps = {
    ...incomingSlotProps,
    popper: {
      ...(incomingSlotProps?.popper ?? {}),
      popperRef,
      ...(followCursor
        ? {
          anchorEl: {
            getBoundingClientRect: () => {
              const y = areaRef.current?.getBoundingClientRect().y ?? 0;
              return new DOMRect(positionRef.current.x, y, 0, 0);
            },
          },
        }
        : {}),
    },
    tooltip: {
      ...(incomingSlotProps?.tooltip ?? {}),
      sx: {
        ...(incomingSlotProps?.tooltip?.sx ?? {}),
        ...(width ? { width } : {}),
        ...(height ? { height } : {}),
        backgroundColor: 'white',
        border: '1px solid #ccc',
        boxShadow: '0px 0px 6px rgba(0,0,0,0.1)',
        '&::-webkit-scrollbar': {
          width: '4px'
        },
        scrollbarWidth: 'thin'
      },
    },
  };

  let titleProp: React.ReactNode = rawTitle;
  if (typeof rawTitle === 'string' && (multiline || width)) {
    titleProp = (
      <Box
        component="span"
        sx={{
          display: 'block',
          whiteSpace: multiline ? 'pre-line' : undefined,
          ...(width ? { width } : {}),
          ...(height ? { height } : {}),
          overflow: 'auto',
          backgroundColor: 'white',
          color: 'black',
          '&::-webkit-scrollbar': {
            width: '4px'
          },
          scrollbarWidth: 'thin'
        }}
      >
        {rawTitle}
      </Box>
    );
  }

  return (
    <Tooltip
      placement={placement}
      arrow={arrow}
      {...rest}
      title={titleProp}
      slotProps={mergedSlotProps}
      followCursor={followCursor}
    >
      <Box
        ref={areaRef}
        onMouseMove={followCursor ? handleMouseMove : undefined}
        sx={{
          p: 0,
          backgroundColor: 'white'
        }}
        {...boxProps}
      >
        {children}
      </Box>
    </Tooltip>
  );
}
