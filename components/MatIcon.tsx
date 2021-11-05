import { useEffect } from "react";
import { Box } from "@chakra-ui/react";

interface PropTypes {
  name: string;
  fontSize?: number;
  color?: string;
}

export const MatIcon = ({ name, fontSize, color }: PropTypes): JSX.Element => {
  return (
    <Box
      className="material-icons-outlined"
      fontSize={fontSize ? fontSize : "24px"}
      color={color ? color : "#ffffff"}
    >
      {name}
    </Box>
  );
};
