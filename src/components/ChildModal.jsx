import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import Fade from "@mui/material/Fade";
import Backdrop from "@mui/material/Backdrop";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  borderRadius: 4,
  boxShadow: 8,
  pt: 2,
  px: 4,
  pb: 3,
  fontFamily: "sans-serif",
  paddingLeft: 5,
  paddingRight: 5,
};

export default function ChildModal({ open, setOpen, setModal1 }) {
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setModal1(true);
  };

  const useStyle = {
    button1: {
      "&:hover": {
        backgroundColor: "#455bed !important",
      },
    },
    button2: {
      "&:hover": {
        backgroundColor: "rgba(0, 0, 0, 0.1) !important",
      },
    },
  };

  return (
    <React.Fragment>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={{ ...style, width: 400 }}>
            <div className="close-modal">
              <span onClick={handleClose}>
                <CloseSharpIcon fontSize="large" />
              </span>
            </div>
            <h2 id="child-modal-title" className="modal-title system-ui-font">
              Create new team
            </h2>
            <p id="child-modal-description" className="gray-paragraph">
              Name your team before choosing a new plan subscriptiion.
            </p>
            <form className="modal-form">
              <input
                type="text"
                placeholder="Enter team name"
                className="modal-input"
              />
            </form>
            <div className="button-group-modal">
              <Button
                style={{
                  backgroundColor: "#4262ff",
                  borderColor: "#4262ff",
                  fontSize: 16,
                  padding: 10,
                  paddingLeft: 24,
                  paddingRight: 24,
                  fontFamily: "system-ui",
                  textTransform: "initial",
                  boxShadow: "none",
                }}
                sx={useStyle.button1}
                variant="contained"
              >
                Continue
              </Button>
              <Button
                onClick={handleClose}
                style={{
                  backgroundColor: "#f5f5f7",
                  fontFamily: "system-ui",
                  fontSize: 16,
                  padding: 10,
                  paddingLeft: 24,
                  paddingRight: 24,
                  textTransform: "initial",
                  color: "#050038",
                  marginLeft: 36,
                  boxShadow: "none",
                }}
                sx={useStyle.button2}
                variant="contained"
              >
                Cancel
              </Button>
            </div>
          </Box>
        </Fade>
      </Modal>
    </React.Fragment>
  );
}
