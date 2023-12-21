import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="search">
        <SearchOutlinedIcon />
        <input type="text" placeholder="Search boards" />
      </div>
      <div className="button-group">
        <Button variant="outlined">
          <AddIcon style={{ color: "#3859ff" }} />
          <span>invite members</span>
        </Button>
        <Button style={{ backgroundColor: "#3859ff" }} variant="contained">
          upgrade
        </Button>
      </div>

      <aside className="end-topbar">
        <svg
          fill="none"
          viewBox="0 0 22 22"
          className="icon-3CqDw icon_large-2wsCL icon-25uF- svg-icon2"
          aria-hidden="true"
          role="presentation"
          focusable="false"
          data-testid="svg-icon"
        >
          <path
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            d="M9 8.5C9 7.39543 9.89543 6.5 11 6.5C12.1046 6.5 13 7.39543 13 8.5C13 9.60457 12.1046 10.5 11 10.5C10.4477 10.5 10 10.9477 10 11.5V12.5C10 13.0523 10.4477 13.5 11 13.5C11.5523 13.5 12 13.0523 12 12.5V12C13.7252 11.556 15 10.3638 15 8.5C15 6.29086 13.2091 4.5 11 4.5C8.79086 4.5 7 6.29086 7 8.5C7 9.05228 7.44771 9.5 8 9.5C8.55229 9.5 9 9.05228 9 8.5Z"
          ></path>
          <path
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            d="M11 17.5C11.8284 17.5 12.5 16.8284 12.5 16C12.5 15.1716 11.8284 14.5 11 14.5C10.1716 14.5 9.5 15.1716 9.5 16C9.5 16.8284 10.1716 17.5 11 17.5Z"
          ></path>
          <path
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            d="M22 11C22 17.0751 17.0751 22 11 22C4.92487 22 0 17.0751 0 11C0 4.92487 4.92487 0 11 0C17.0751 0 22 4.92487 22 11ZM20 11C20 15.9706 15.9706 20 11 20C6.02944 20 2 15.9706 2 11C2 6.02944 6.02944 2 11 2C15.9706 2 20 6.02944 20 11Z"
            clip-rule="evenodd"
            fill-rule="evenodd"
          ></path>
        </svg>
        <svg
          viewBox="0 0 24 24"
          className="icon-3CqDw icon_large-2wsCL icon-37m6E svg-icon2"
          aria-hidden="true"
          role="presentation"
          focusable="false"
          data-testid="svg-icon"
        >
          <g
            xmlns="http://www.w3.org/2000/svg"
            stroke-width="2"
            stroke="currentColor"
            fill-rule="evenodd"
            fill="none"
          >
            <path d="M12 4a5 5 0 0 0-5 5v3.303L3.869 17H20.13L17 12.303V9a5 5 0 0 0-5-5zM10 17v1a2 2 0 1 0 4 0v-1h-4z"></path>
          </g>
        </svg>

        <img
          className="profile-pic"
          src="https://images.unsplash.com/photo-1457449940276-e8deed18bfff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
          alt=""
        />
      </aside>
    </div>
  );
};

export default Topbar;
