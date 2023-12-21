import React, { useState } from "react";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import NewBoardModal from "./NewBoardModal";
const RecentBoard = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="recent-board">
      <h2 className="system-ui-font display-section-title">Recent boards</h2>
      <div className="card-section">
        <button className="new-board-btn" onClick={() => setOpen(true)}>
          <p></p>
          <AddSharpIcon fontSize="large" />
          <p>New Board</p>
        </button>
      </div>
      <NewBoardModal open={open} setOpen={setOpen} />
    </div>
  );
};

export default RecentBoard;
