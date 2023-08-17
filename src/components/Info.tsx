import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import About from "./About";
import Technologies from "./Technologies";
import { useState } from "react";
import Projects from "./Projects";
import Resume from "./Resume";
import { Reveal } from "./animations/Reveal";
import { Element } from "react-scroll";

const Info = () => {
  const isSmallScreen = useMediaQuery("(max-width:900px)");
  const [isSkilled, setIsSkilled] = useState(true);
  const SkilledButtonOutline = (isSkilled: Boolean) => {
    return isSkilled ? { borderColor: "#8C0992" } : { borderColor: "white" };
  };
  const LearningButtonOutline = (isSkilled: Boolean) => {
    return !isSkilled ? { borderColor: "#8C0992" } : { borderColor: "white" };
  };

  return (
    <Box
      sx={{
        background: `linear-gradient(to bottom, #8C0992, #0B0133)`,
      }}
    >
      <Element name="infoSection">
        <Box
          sx={{
            backgroundColor: `rgba(55, 55, 55, 0.4)`,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box pt={4} width="92%">
            <Element name="aboutSection">
              <Reveal>
                <Typography
                  variant="h2"
                  sx={{ fontSize: isSmallScreen ? "3em" : "4rem" }}
                >
                  About
                </Typography>
              </Reveal>
            </Element>
            <About />
            <Reveal>
              <Box display="flex" flexWrap="wrap">
                <Typography
                  variant="h2"
                  sx={{ fontSize: isSmallScreen ? "3em" : "4rem" }}
                >
                  Technologies
                </Typography>
                <Box display="flex" alignItems="center" ml={2}>
                  <Button
                    variant="outlined"
                    onClick={() => setIsSkilled(true)}
                    sx={{
                      ...SkilledButtonOutline(isSkilled),
                      fontSize: "1.2em",
                      px: 4,
                    }}
                  >
                    Skilled
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={() => setIsSkilled(false)}
                    sx={{
                      ...LearningButtonOutline(isSkilled),
                      ml: 2,
                      fontSize: "1.2em",
                      px: 4,
                    }}
                  >
                    Learning
                  </Button>
                </Box>
              </Box>
            </Reveal>
            <Technologies isSkilled={isSkilled} />
            <Reveal>
              <Typography
                variant="h2"
                sx={{ fontSize: isSmallScreen ? "3em" : "4rem" }}
              >
                Projects
              </Typography>
            </Reveal>
            <Projects />
            <Reveal>
              <Typography
                variant="h2"
                sx={{ fontSize: isSmallScreen ? "3em" : "4rem" }}
              >
                Resume
              </Typography>
            </Reveal>
            <Resume />
          </Box>
        </Box>
      </Element>
    </Box>
  );
};

export default Info;
