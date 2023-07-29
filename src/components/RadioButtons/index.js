import { useRadioGroup, HStack } from "@chakra-ui/react";
import RadioCard from "./RadioCard";

import { useDispatch } from "react-redux";
import { changeActiveColor } from "../../redux/notes/notesSlice";

function RadioButtons() {
  const dispatch = useDispatch();
  const options = [
    "brand.100",
    "brand.200",
    "brand.300",
    "brand.400",
    "brand.500",
  ];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "framework",
    defaultValue: "brand.100",
    onChange: (color) => dispatch(changeActiveColor(color)),
  });

  const group = getRootProps();

  return (
    <HStack {...group}>
      {options.map((value) => {
        const radio = getRadioProps({ value });
        return (
          <RadioCard key={value} {...radio}>
            {value}
          </RadioCard>
        );
      })}
    </HStack>
  );
}

export default RadioButtons;
