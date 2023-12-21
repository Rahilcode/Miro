import React from "react";
import AddIcon from "@mui/icons-material/Add";

const ProjectSection = () => {
  return (
    <div className="project-section">
      <h5 className="system-ui-font">Projects</h5>
      <button className="add-project-btn">
        <AddIcon fontSize="small" />
      </button>
    </div>
  );
};

export default ProjectSection;
