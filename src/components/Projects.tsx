import { Box, Typography } from "@mui/material";
import Projects from "./assets/Projects/Projects";
import "../tiles.css";
import { SlideReveal } from "./animations/SlideReveal";
import { Element } from "react-scroll";
import ProjectDisplay from "./projects/ProjectDisplay";
import React from "react";
const Progects = () => {
  const [isProjectOpen, setIsProjectOpen] = React.useState(false);
  const [projectIndex, setProjectIndex] = React.useState(0);
  const calcDelay = (index: number) => {
    return index * 0.1;
  };
  const handleProjectClick = (index: number) => {
    setIsProjectOpen(true);
    setProjectIndex(index);
  };

  return (
    <Element name="projectSection">
      <Box mb={3}>
        <Box mt={1} display="flex" flexWrap="wrap">
          {Projects.map((project, index) => (
            <Box className="tiles" onClick={() => handleProjectClick(index)}>
              <SlideReveal delay={calcDelay(index)}>
                <Box
                  sx={{
                    backgroundColor: `rgba(255, 255, 255, 0.2)`,
                    height: "200px",
                    width: "200px",
                    borderRadius: "15px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    ml: 2,
                    mt: 2,
                  }}
                >
                  <Typography variant="h5" sx={{ mt: 1 }}>
                    {project.name}
                  </Typography>
                  <Box
                    sx={{
                      mt: 3,
                      backgroundImage: `url(${project.img1})`,
                      borderRadius: "8px",
                      backgroundSize: "cover",
                      height: "110px",
                      width: "190px",
                    }}
                  ></Box>
                </Box>
              </SlideReveal>
            </Box>
          ))}
        </Box>
        <ProjectDisplay
          isProjectOpen={isProjectOpen}
          setIsProjectOpen={setIsProjectOpen}
          projectIndex={projectIndex}
        />
      </Box>
    </Element>
  );
};

export default Progects;
