import "./App.css";
// chakra-ui
import { Grid } from "@chakra-ui/react";
// components
import Header from "./components/Header";
import Form from "./components/Form";
import NoteList from "./components/NoteList";

function App() {
  return (
    <div className="App">
      <Grid pt={3} justifyContent="center">
        <Header />
        <Form />
        <NoteList />
      </Grid>
    </div>
  );
}

export default App;
