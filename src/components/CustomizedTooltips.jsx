import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

const BootstrapTooltip = styled(({ className, ...props }) => (
  <Tooltip placement="right" {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
    height: 24,
    fontSize: 14,
    paddingTop: 10,
  },
}));

export default function CustomizedTooltips({ team }) {
  return (
    <div>
      <BootstrapTooltip title={team.teamName}>
        <div className="team-intials">
          <button style={{ backgroundColor: team.color }} className="team-btn">
            {team.teamInitials}
          </button>
        </div>
      </BootstrapTooltip>
    </div>
  );
}
