import { Box, Typography } from "@mui/material";
import SimCardDownloadIcon from "@mui/icons-material/SimCardDownload";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import "../tiles.css";
import { SlideReveal } from "./animations/SlideReveal";
import { Element } from "react-scroll";

const Resume = () => {
  return (
    <Element name="resumeSection">
      <Box display="flex" flexWrap="wrap" mb={4}>
        <Box className="tiles">
          <SlideReveal delay={0.3}>
            <a
              href="/resume.pdf"
              download="Resume"
              style={{ textDecoration: "none" }}
            >
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
                  PDF Download
                </Typography>
                <SimCardDownloadIcon
                  sx={{ fontSize: "9em", mt: 1, color: "white" }}
                />
              </Box>
            </a>
          </SlideReveal>
        </Box>
        <Box className="tiles">
          <SlideReveal delay={0.5}>
            <a
              href="https://drive.google.com/file/d/1ttM0jRU5_mxG9VNglv9QVuYi6NDkopIe/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
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
                  Web View
                </Typography>
                <OpenInNewIcon
                  sx={{ fontSize: "9em", mt: 1, color: "white" }}
                />
              </Box>
            </a>
          </SlideReveal>
        </Box>
      </Box>
    </Element>
  );
};

export default Resume;
