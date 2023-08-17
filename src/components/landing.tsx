import {
  Box,
  Button,
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import BackgroundImg from "./assets/Background.svg";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import Info from "./Info";
import { Reveal } from "./animations/Reveal";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-scroll";
import Contact from "./contact";

const Landing = () => {
  const isSmallScreen = useMediaQuery("(max-width:900px)");
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [animateArrow, setAnimateArrow] = useState(0);
  const [animateArrowOpacity, setAnimateArrowOpacity] = useState(1);

  const handleArrowClick = () => {
    setAnimateArrow(400);
    setAnimateArrowOpacity(0);

    setTimeout(() => {
      setAnimateArrow(0);
      setTimeout(() => {
        setAnimateArrowOpacity(1);
      }, 100);
    }, 1100);
  };

  const NavStyles = {
    fontSize: "1.8rem",
    fontWeight: "500",
  };
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${BackgroundImg})`,
          backgroundSize: "cover",
          height: "100vh",

          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            height: "95%",
            width: "96%",
            borderRadius: "10px",
          }}
        >
          <Box display="flex" justifyContent="flex-end">
            <Reveal>
              <Box mt={2} mr={3}>
                <Link to="aboutSection" smooth={true} duration={500}>
                  <Button
                    sx={{
                      ...NavStyles,
                      mr: 2,
                      fontSize: isSmallScreen ? "1.3em" : "2em",
                    }}
                  >
                    About Me
                  </Button>
                </Link>
                <Link to="projectSection" smooth={true} duration={500}>
                  <Button
                    sx={{
                      ...NavStyles,
                      mr: 2,
                      fontSize: isSmallScreen ? "1.3em" : "2em",
                    }}
                  >
                    Projects
                  </Button>
                </Link>
                <Link to="resumeSection" smooth={true} duration={500}>
                  <Button
                    sx={{
                      ...NavStyles,
                      mr: 2,
                      fontSize: isSmallScreen ? "1.3em" : "2em",
                    }}
                  >
                    Resume
                  </Button>
                </Link>
              </Box>
            </Reveal>
          </Box>
          <Grid container height="90%">
            <Grid
              item
              xs={12}
              sm={8}
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <Reveal>
                <Box>
                  <Typography
                    variant="h1"
                    sx={{ fontSize: isSmallScreen ? "4.2em" : "8rem" }}
                  >
                    Need Full Stack <br /> Development?
                  </Typography>
                  <Typography
                    variant="h1"
                    sx={{ fontSize: isSmallScreen ? "4.2em" : "8rem" }}
                  >
                    I can Help!
                  </Typography>
                  <Button
                    variant="contained"
                    onClick={() => setIsContactOpen(true)}
                    sx={{
                      mt: 2,
                      borderRadius: "10px",
                      fontSize: isSmallScreen ? "1em" : "1.3em",
                    }}
                  >
                    Contact
                  </Button>
                  <Contact
                    isContactOpen={isContactOpen}
                    setIsContactOpen={setIsContactOpen}
                  />
                </Box>
              </Reveal>
            </Grid>
            <Grid item xs={12} sm={4} display="flex" alignItems="center">
              <motion.div
                animate={{ y: animateArrow, opacity: animateArrowOpacity }}
                transition={{ duration: 0.1, ease: "easeInOut" }}
              >
                <Reveal>
                  <Link to="infoSection" smooth={true} duration={500}>
                    <IconButton
                      className="down-arrow"
                      onClick={handleArrowClick}
                    >
                      <ArrowCircleDownIcon
                        sx={{
                          fontSize: isSmallScreen ? "6em" : "8em",
                          color: "#fff",
                        }}
                      />
                    </IconButton>
                  </Link>
                </Reveal>
              </motion.div>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Info />
    </Box>
  );
};

export default Landing;
