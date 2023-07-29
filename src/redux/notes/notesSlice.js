import { createSlice, nanoid } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    items: JSON.parse(localStorage.getItem("notes")) || [],
    activeFilter: "",
    activeColor: "brand.100",
  },
  reducers: {
    addNote: {
      reducer: (state, action) => {
        state.items.push(action.payload);
        localStorage.setItem("notes", JSON.stringify(state.items));
      },
      prepare: ({ title, color }) => {
        return {
          payload: {
            id: nanoid(),
            title,
            color,
          },
        };
      },
    },
    changeActiveFilter: (state, action) => {
      state.activeFilter = action.payload;
    },
    changeActiveColor: (state, action) => {
      state.activeColor = action.payload;
    },
  },
});

export const selectNotes = (state) => state.notes.items;

// Filtered
export const selectFilteredNotes = (state) => {
  if (state.notes.activeFilter === "") {
    return state.notes.items;
  } else {
    return state.notes.items.filter((item) =>
      item.title.toLowerCase().match(state.notes.activeFilter.toLowerCase())
    );
  }
};

export const { addNote, changeActiveFilter, changeActiveColor } =
  notesSlice.actions;
export default notesSlice.reducer;
