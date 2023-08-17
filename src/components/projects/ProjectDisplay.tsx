import { Box, IconButton, Typography, useMediaQuery } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Projects from "../assets/Projects/Projects";
import ProjectTechnologies from "./ProjectTechnologies";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Reveal } from "../animations/Reveal";

const ProjectDisplay = (props: {
  isProjectOpen: boolean;
  setIsProjectOpen: Function;
  projectIndex: number;
}) => {
  const isSmallScreen = useMediaQuery("(max-width:900px)");
  const handleClose = () => {
    props.setIsProjectOpen(false);
  };

  return (
    <div>
      <Dialog
        open={props.isProjectOpen}
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
            <Typography variant="h3">
              {Projects[props.projectIndex].name}
            </Typography>
          </Reveal>
        </DialogTitle>
        <DialogContent>
          <Reveal>
            <Typography variant="h6">
              {Projects[props.projectIndex].description}
            </Typography>
          </Reveal>
          <Box display="flex">
            <Reveal>
              <IconButton
                href={Projects[props.projectIndex].github}
                target="new"
              >
                <GitHubIcon sx={{ fontSize: "3em", color: "white" }} />
              </IconButton>
            </Reveal>
            <Reveal>
              <IconButton href={Projects[props.projectIndex].live} target="new">
                <OpenInNewIcon sx={{ fontSize: "3em", color: "white" }} />
              </IconButton>
            </Reveal>
          </Box>
          <ProjectTechnologies projectIndex={props.projectIndex} />
          <Box display="flex" flexDirection="column" alignItems="center">
            <img
              src={Projects[props.projectIndex].img1}
              style={{
                width: isSmallScreen ? "300px" : "550px",
                height: "auto",
              }}
              alt="content related to dialog"
            />
            <img
              src={Projects[props.projectIndex].img2}
              style={{
                width: isSmallScreen ? "300px" : "550px",
                height: "auto",
                marginTop: "20px",
              }}
              alt="content related to dialog"
            />
            <img
              src={Projects[props.projectIndex].img3}
              style={{
                width: isSmallScreen ? "300px" : "550px",
                height: "auto",
                marginTop: "20px",
              }}
              alt="content related to dialog"
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={{ fontSize: "2em" }}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ProjectDisplay;
