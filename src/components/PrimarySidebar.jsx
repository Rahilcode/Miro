import React from "react";
import CustomizedTooltips from "./CustomizedTooltips";
import { useSelector } from "react-redux";
import TeamInitialBtn from "./TeamInitialBtn";
import CustomizedIconTooltips from "./CustomizedIconTooltips";

const PrimarySidebar = () => {
  const teams = useSelector((state) => state.primarySidebar.teams);

  return (
    <aside className="primary-sidebar">
      {teams.map((team, index) => {
        return <CustomizedTooltips key={team.id} team={team} />;
      })}

      <CustomizedIconTooltips />
    </aside>
  );
};

export default PrimarySidebar;
