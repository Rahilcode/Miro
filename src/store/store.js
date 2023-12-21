import { configureStore } from "@reduxjs/toolkit";
import primarySidebarReducer from "../features/PrimarySidebar/primarySidebar";
import secondarySidebarReducer from "../features/SecondarySidebar/secondarySidebar";

export const store = configureStore({
  reducer: {
    primarySidebar: primarySidebarReducer,
    secondarySidebar: secondarySidebarReducer,
  },
});
