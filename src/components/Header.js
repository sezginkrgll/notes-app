import React, { useEffect, useState } from "react";
// chakra-ui
import { Box, Heading, Input } from "@chakra-ui/react";
// Redux
import { useDispatch } from "react-redux";
import { changeActiveFilter } from "../redux/notes/notesSlice";

function Header() {
  const dispatch = useDispatch();

  return (
    <Box textAlign="center">
      <Heading as="h1" size="lg" noOfLines={1} mb={3} color="blackAlpha.500">
        NotesApp
      </Heading>
      <Input
        placeholder="Search..."
        width="2xs"
        bg="white"
        borderColor="blackAlpha.300"
        focusBorderColor="blue.200"
        mb={3}
        pl={5}
        rounded="3xl"
        fontSize="xl"
        errorBorderColor="crimson"
        isInvalid={false /** invalid -> Geçersiz */}
        onChange={(e) => dispatch(changeActiveFilter(e.target.value))}
      />
    </Box>
  );
}

export default Header;
