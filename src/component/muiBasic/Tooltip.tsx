import * as React from 'react';
import Box, { type BoxProps } from '@mui/material/Box';
import Tooltip, { type TooltipProps } from '@mui/material/Tooltip';
import { type Instance } from '@popperjs/core';

interface BasicTooltipProps extends Omit<TooltipProps, 'slotProps'> {
  boxProps?: BoxProps;
  // MUI versions differ on slot prop names; allow callers to pass slotProps
  // (keeps runtime flexibility while avoiding type errors).
  slotProps?: any;
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

  const mergedSlotProps = {
    ...tooltipProps.slotProps,
    popper: {
      ...(tooltipProps.slotProps?.popper ?? {}),
      popperRef,
      anchorEl: {
        getBoundingClientRect: () => {
          const y = areaRef.current?.getBoundingClientRect().y ?? 0;
          return new DOMRect(positionRef.current.x, y, 0, 0);
        },
      },
    },
  };

  return (
    <Tooltip
      placement={placement}
      arrow={arrow}
      {...tooltipProps}
      slotProps={mergedSlotProps}
    >
      <Box
        ref={areaRef}
        onMouseMove={handleMouseMove}
        sx={{ p: 0 }}
        {...boxProps}
      >
        {children}
      </Box>
    </Tooltip>
  );
}
