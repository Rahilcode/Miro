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

export default function NestedModal({ open, setOpen, setModal2 }) {
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
            <div className="close-modal">
              <span onClick={handleClose}>
                <CloseSharpIcon fontSize="large" />
              </span>
            </div>
            <h2 id="parent-modal-title" className="modal-title system-ui-font">
              Join teams to collaborate
            </h2>
            <p id="parent-modal-description" className="gray-paragraph">
              Choose from these teams to access their boards. You may have to
              ask a team to let you join first
            </p>
            <hr />

            <Button
              style={{
                textTransform: "initial",
                marginTop: 10,
                marginBottom: 10,
              }}
              onClick={handleChild}
              variant="text"
            >
              <AddSharpIcon style={{ color: "#9649ff" }} />
              &emsp;
              <span className="purple system-ui-font font-size-18">
                Create team
              </span>
            </Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
