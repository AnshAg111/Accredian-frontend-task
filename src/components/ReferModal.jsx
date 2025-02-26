import React from "react";
import { Modal, Box, Typography, TextField, Button } from "@mui/material";
import styled from "@emotion/styled";

const ModalBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 500px;
  background-color: #fff;
  padding: 20px;
  box-shadow: 24px;
  border-radius: 8px;
`;

const ReferModal = ({ open, onClose, form, handleChange, handleSubmit }) => (
  <Modal open={open} onClose={onClose}>
    <ModalBox>
      <Typography variant="h6" gutterBottom>
        Refer a Friend
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          name="referrerName"
          label="Your Name"
          value={form.referrerName}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          name="referrerEmail"
          label="Your Email"
          value={form.referrerEmail}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          name="refereeName"
          label="Friend's Name"
          value={form.refereeName}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          name="refereeEmail"
          label="Friend's Email"
          value={form.refereeEmail}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          name="courseID"
          label="Course ID"
          value={form.courseID}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <Box mt={2} textAlign="right">
          <Button onClick={onClose} color="secondary">
            Cancel
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Box>
      </form>
    </ModalBox>
  </Modal>
);

export default ReferModal;
