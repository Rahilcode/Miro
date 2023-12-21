import { Tooltip } from "@mui/material";
import React from "react";

const TeamInitialBtn = ({ team }) => {
  return (
    <div className="team-intials">
      <Tooltip
        style={{ height: 40, backgroundColor: "red" }}
        arrow
        title="Delete"
        className="tool-tip"
      >
        <button style={{ backgroundColor: team.color }} className="team-btn">
          {team.teamInitials}
        </button>
      </Tooltip>
    </div>
  );
};

export default TeamInitialBtn;
