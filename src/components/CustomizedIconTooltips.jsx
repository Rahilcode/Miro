import * as React from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import NestedModal from "./Modal";
import ChildModal from "./ChildModal";

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

export default function CustomizedIconTooltips({ team }) {
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);

  return (
    <div>
      <BootstrapTooltip title="Add teams">
        <div className="team-intials">
          <button onClick={() => setModal1(true)} className="team-btn plus-btn">
            <AddSharpIcon style={{ color: "white" }} />
          </button>
        </div>
      </BootstrapTooltip>
      {modal1 && (
        <NestedModal open={modal1} setOpen={setModal1} setModal2={setModal2} />
      )}
      {modal2 && (
        <ChildModal open={modal2} setOpen={setModal2} setModal1={setModal1} />
      )}
    </div>
  );
}
