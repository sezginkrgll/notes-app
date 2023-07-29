import React from "react";
// chakra-ui
import { Box, HStack, Grid } from "@chakra-ui/react";
// Redux
import { useSelector } from "react-redux";
import { selectFilteredNotes } from "../redux/notes/notesSlice";

function NoteList() {
  const filteredNotes = useSelector(selectFilteredNotes);
  var reverseNotes = [...filteredNotes].reverse();
  return (
    <HStack spacing="24px" justifyContent="center">
      <Grid templateColumns="repeat(3, 1fr)" gap={3}>
        {reverseNotes.map((item) => (
          <Box
            w="160px"
            bg={item.color}
            boxShadow="base"
            rounded="base"
            textAlign="left"
            lineHeight={10}
            pl={2}
            pr={2}
            key={item.id}
          >
            {item.title}
          </Box>
        ))}
      </Grid>
    </HStack>
  );
}

export default NoteList;
