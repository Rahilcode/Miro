import React from "react";
import PrimarySidebar from "./PrimarySidebar";
import SecondarySidebar from "./SecondarySidebar/SecondarySidebar";
import RecentBoard from "./RecentBoard";
import Topbar from "./Topbar";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <PrimarySidebar />
      <SecondarySidebar />
      <div className="display-section">
        <Topbar />
        <RecentBoard />
      </div>
    </div>
  );
};

export default Dashboard;
