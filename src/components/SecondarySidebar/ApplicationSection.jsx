import React from "react";

const ApplicationSection = () => {
  return (
    <div className="application-section">
      <div className="get-apps">
        <span>Get Apps</span>
      </div>

      <div className="no-of-users system-ui-font">
        <img
          width="30"
          height="30"
          src="https://img.icons8.com/ios-glyphs/30/mac-os.png"
          alt="mac-os"
        />
        <img
          width="30"
          height="30"
          src="https://img.icons8.com/ios-glyphs/30/google-play.png"
          alt="google-play"
        />

        <img
          width="30"
          height="30"
          src="https://img.icons8.com/ios-glyphs/30/windows-10.png"
          alt="windows-10"
        />
      </div>
    </div>
  );
};

export default ApplicationSection;
