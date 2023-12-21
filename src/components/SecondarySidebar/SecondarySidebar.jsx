import React from "react";
import TabOption from "./TabOption";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import StarOutlineSharpIcon from "@mui/icons-material/StarOutlineSharp";
import TeamNameDropdown from "./TeamNameDropdown";
import ProjectSection from "./ProjectSection";
import SystemUpdateAltOutlinedIcon from "@mui/icons-material/SystemUpdateAltOutlined";
import ApplicationSection from "./ApplicationSection";

const SecondarySidebar = () => {
  return (
    <div className="secondary-sidebar">
      <div className="miro-image">
        <img
          src="https://mirostatic.com/app/static/baa3028a5c006a0a.svg"
          alt="miro logo"
        />
      </div>

      <div>
        <div className="sidebar-section1">
          <TabOption
            active="recent"
            TabIcon={AccessTimeIcon}
            teamName="Recent boards"
          />
          <TabOption
            active="starred"
            TabIcon={StarOutlineSharpIcon}
            teamName="Starred boards"
          />
        </div>
        <div className="team-name-section">
          <TeamNameDropdown />
        </div>
        <div className="sidebar-section2">
          <div className={`tab-option`}>
            <svg
              fill="#000000"
              viewBox="0 0 16 16"
              className="icon-3CqDw icon_small-3j6mB dashboard-projects-nav-item__icon svg-icon"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              data-testid="svg-icon"
            >
              <path
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                d="M2 1.5C1.17157 1.5 0.5 2.17157 0.5 3V11C0.5 11.8284 1.17157 12.5 2 12.5H3.25V14.5C3.25 14.9142 3.58579 15.25 4 15.25C4.41421 15.25 4.75 14.9142 4.75 14.5V12.5H11.25V14.5C11.25 14.9142 11.5858 15.25 12 15.25C12.4142 15.25 12.75 14.9142 12.75 14.5V12.5H14C14.8284 12.5 15.5 11.8284 15.5 11V3C15.5 2.17157 14.8284 1.5 14 1.5H2ZM2 11V3H14V11H2ZM8 8.25C7.58579 8.25 7.25 8.58579 7.25 9C7.25 9.41421 7.58579 9.75 8 9.75H12C12.4142 9.75 12.75 9.41421 12.75 9C12.75 8.58579 12.4142 8.25 12 8.25H8Z"
                clip-rule="evenodd"
                fill-rule="evenodd"
              ></path>
            </svg>
            <div className="tab-name system-ui-font">Boards in this team</div>
          </div>
          <div className={`tab-option`}>
            <svg
              fill="none"
              viewBox="0 0 16 16"
              className="icon-3CqDw icon_small-3j6mB dashboard-projects-nav-item__icon svg-icon"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              data-testid="svg-icon"
            >
              <circle
                xmlns="http://www.w3.org/2000/svg"
                stroke-width="1.3"
                stroke="currentColor"
                r="6.35"
                cy="8"
                cx="8"
              ></circle>
              <path
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                d="M13.223 4.279C13.7299 4.2048 14.1228 4.20161 14.3995 4.24311C14.4994 4.25809 14.5694 4.27603 14.6168 4.29187C14.6066 4.3417 14.5868 4.41239 14.5496 4.50805C14.4157 4.85227 14.1196 5.33193 13.6148 5.91374C12.6143 7.06685 10.9886 8.39895 8.96489 9.58975C6.94115 10.7805 4.99637 11.5493 3.51628 11.8558C2.76948 12.0105 2.21386 12.032 1.85439 11.9781C1.75449 11.9631 1.68456 11.9452 1.63709 11.9293C1.64736 11.8795 1.66708 11.8088 1.70431 11.7132C1.81705 11.4234 2.04472 11.0376 2.41509 10.5757L2.09677 8.98412C0.684811 10.4534 0.0220044 11.8046 0.478776 12.6109C1.29544 14.0525 5.38168 13.2063 9.60566 10.7209C13.8296 8.23541 16.5918 5.05191 15.7751 3.6103C15.3196 2.80619 13.8468 2.71388 11.9003 3.22082L13.223 4.279ZM14.6264 4.19402C14.6266 4.19392 14.6272 4.19652 14.6274 4.20213C14.6263 4.19693 14.6262 4.19413 14.6264 4.19402ZM1.54914 11.8889C1.54933 11.8888 1.55166 11.8903 1.55557 11.8938C1.55091 11.8908 1.54895 11.889 1.54914 11.8889ZM1.62748 12.0272C1.62727 12.0273 1.62677 12.0247 1.62655 12.0191C1.62757 12.0243 1.62768 12.0271 1.62748 12.0272ZM14.6984 4.32744C14.703 4.33043 14.705 4.33218 14.7048 4.3323C14.7046 4.33243 14.7023 4.33094 14.6984 4.32744Z"
                clip-rule="evenodd"
                fill-rule="evenodd"
              ></path>
            </svg>
            <div className="tab-name system-ui-font">Boards in this team</div>
          </div>
        </div>

        <div className="sidebar-project">
          <ProjectSection />
        </div>

        <div className="sidebar-section3">
          <TabOption
            active="backup"
            TabIcon={SystemUpdateAltOutlinedIcon}
            teamName="Recent boards"
            extraClass="rotate180"
          />
        </div>
      </div>

      <div className="sidebar-app-section">
        <ApplicationSection />
      </div>
    </div>
  );
};

export default SecondarySidebar;
