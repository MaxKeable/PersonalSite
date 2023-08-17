import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Box, TextField, Typography } from "@mui/material";
import { Reveal } from "./animations/Reveal";
import { Form, Formik } from "formik";
import { SlideReveal } from "./animations/SlideReveal";

const Contact = (props: {
  isContactOpen: boolean;
  setIsContactOpen: Function;
}) => {
  const handleClose = () => {
    props.setIsContactOpen(false);
  };

  return (
    <div>
      <Dialog
        open={props.isContactOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          sx: {
            backgroundColor: `rgba(55, 55, 55, 0.95)`,
            borderRadius: "10px",
          },
        }}
      >
        <DialogTitle id="alert-dialog-title">
          <Reveal>
            <Typography variant="h1" sx={{ fontSize: "5em" }}>
              Contact Me!
            </Typography>
          </Reveal>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                message: "",
              }}
              onSubmit={(values) => {
                console.log(values);
                handleClose();
              }}
            >
              {({ values, handleBlur, handleChange, errors, touched }) => (
                <SlideReveal delay={0.2}>
                  <Form>
                    <Box
                      display="flex"
                      flexDirection="column"
                      p={2}
                      sx={{
                        backgroundColor: `rgba(255, 255, 255, 0.4)`,
                        borderRadius: "5px",
                      }}
                    >
                      <Box display="flex" justifyContent="space-between" mb={2}>
                        <TextField
                          name="firstName"
                          label="First Name"
                          variant="outlined"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <TextField
                          name="lastName"
                          label="Last Name"
                          variant="outlined"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </Box>
                      <TextField
                        fullWidth
                        name="email"
                        label="Email"
                        variant="outlined"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <Box mt={2}>
                        <TextField
                          fullWidth
                          multiline
                          rows={4}
                          name="message"
                          label="Message"
                          variant="outlined"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </Box>
                    </Box>
                    <Box mt={3} display="flex" justifyContent="flex-end">
                      <Button variant="contained" type="submit">
                        Send
                      </Button>
                      <Button
                        variant="contained"
                        onClick={handleClose}
                        sx={{ ml: 1 }}
                      >
                        Cancel
                      </Button>
                    </Box>
                  </Form>
                </SlideReveal>
              )}
            </Formik>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Contact;
