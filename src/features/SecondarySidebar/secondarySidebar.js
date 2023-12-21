import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeTab: "recent",
};

export const secondarySidebarSlice = createSlice({
  name: "secondarySidebar",
  initialState,
  reducers: {
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
  },
});

export const { setActiveTab } = secondarySidebarSlice.actions;

export default secondarySidebarSlice.reducer;
