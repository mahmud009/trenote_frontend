import { Box, StyleProps } from "@chakra-ui/react";

interface PropTypes extends StyleProps {
  dotSize: number;
  patternWidth: string;
  color?: string;
  uid: string;
}

export const SVGDots = ({
  dotSize,
  patternWidth,
  uid,
  ...rest
}: PropTypes): JSX.Element => {
  return (
    <Box {...rest}>
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <defs>
          <pattern
            id={`dot_${uid}`}
            patternUnits="userSpaceOnUse"
            width={patternWidth}
            height={patternWidth}
          >
            <circle cx={dotSize} cy={dotSize} r={dotSize} fill="currentColor" />
          </pattern>
        </defs>

        <mask id={`pattern_mask_${uid}`}>
          <rect width="100%" height="100%" fill="white" />
        </mask>

        <rect
          fill={`url(#dot_${uid})`}
          mask={`url(#pattern_mask_${uid})"`}
          width="100%"
          height="100%"
        />
      </svg>
    </Box>
  );
};
