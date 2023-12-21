import React from "react";

const TabOption = ({ TabIcon, teamName, extraClass }) => {
  return (
    <div className={`tab-option`}>
      <div className={`tab-icon ${extraClass}`}>
        {<TabIcon fontSize="small" />}
      </div>
      <div className="tab-name system-ui-font">{teamName}</div>
    </div>
  );
};

export default TabOption;
