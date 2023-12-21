import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const TeamNameDropdown = () => {
  return (
    <div className="team-dropdown">
      <div className="team-name">
        <span>Miro Dashboard</span>
        <KeyboardArrowDownIcon />
      </div>

      <div className="no-of-users system-ui-font">10 users</div>
    </div>
  );
};

export default TeamNameDropdown;
