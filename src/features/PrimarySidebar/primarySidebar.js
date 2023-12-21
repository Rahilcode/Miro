import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  teams: [
    {
      id: "1",
      teamName: "Miro Dashboard",
      teamInitials: "MD",
      color: "#1f5f02",
    },
    { id: "2", teamName: "Test Project", teamInitials: "TP", color: "#c73847" },
  ],
};

export const primarySidebarSlice = createSlice({
  name: "primarySidebar",
  initialState,
  reducers: {},
});

export const {} = primarySidebarSlice.actions;

export default primarySidebarSlice.reducer;
