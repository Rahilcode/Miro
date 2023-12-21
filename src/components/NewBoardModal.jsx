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

export default function NestedModal({ open, setOpen }) {
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleChild = () => {
    setOpen(false);
    setModal2(true);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
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
            <div className="close-modal-abs">
              <span onClick={handleClose}>
                <CloseSharpIcon fontSize="large" />
              </span>
            </div>
            <h2 id="parent-modal-title" className="modal-title system-ui-font">
              [Untitled] will become view-only
            </h2>
            <p
              style={{ textAlign: "center", marginTop: 16, marginBottom: 16 }}
              id="parent-modal-description"
              className="gray-paragraph"
            >
              You’ve reached the limit of three editable boards. Upgrade to
              create unlimited editable boards
            </p>
            <div className="new-board-btn-group">
              <Button
                style={{
                  backgroundColor: "#4262ff",
                  borderColor: "#4262ff",
                  fontSize: 16,
                }}
                variant="contained"
              >
                Create team board
              </Button>
              <Button variant="outlined">Start trial</Button>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
