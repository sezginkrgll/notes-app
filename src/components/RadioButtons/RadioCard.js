import { useRadio, Box } from "@chakra-ui/react";
import Circle from "./Circle";

function RadioCard(props) {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box height="20px" width="20px" {...checkbox} _checked={{}}>
        <Circle bg={props.children} checked={input.checked} />
      </Box>
    </Box>
  );
}

export default RadioCard;
