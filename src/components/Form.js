import React, { useState } from "react";
// chakra-ui
import { Box, Button, Flex, Textarea } from "@chakra-ui/react";
// RadioButtons
import RadioButtons from "./RadioButtons";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { addNote } from "../redux/notes/notesSlice";

function Form() {
  const color = useSelector((state) => state.notes.activeColor);
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      dispatch(addNote({ title, color }));
    }
    setTitle("");
  };

  return (
    <Box mb={3} bg="white" p={3} boxShadow="md" w="504px">
      <Textarea
        placeholder="Enter your note here..."
        p={0}
        size="sm"
        resize="none"
        bg="white"
        w="full"
        h="100px"
        variant="unstyled"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Flex justifyContent="space-between">
        <RadioButtons />
        <Button
          colorScheme="green"
          rounded="3xl"
          h="30px"
          w="90px"
          onClick={handleSubmit}
        >
          ADD
        </Button>
      </Flex>
    </Box>
  );
}

export default Form;
