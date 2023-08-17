import { Box, Grid, Typography } from "@mui/material";
import Avatar from "./assets/Avatar.svg";
import "../tiles.css";
import { SlideReveal } from "./animations/SlideReveal";

const About = () => {
  const birthDate = "2004-07-26";
  const age = Math.floor(
    (new Date().getTime() - new Date(birthDate).getTime()) / 3.15576e10
  );
  return (
    <Box display="flex" flexWrap="wrap" mb={8}>
      <Box className="tiles">
        <SlideReveal delay={0.3}>
          <Box
            sx={{
              backgroundColor: `rgba(255, 255, 255, 0.2)`,
              borderRadius: "10px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              p: 2,
              mt: 2,
              mr: 2,
            }}
          >
            <Box
              sx={{
                backgroundImage: `url(${Avatar})`,
                height: "150px",
                width: "150px",
                borderRadius: "50%",
              }}
            ></Box>
            <Typography variant="h3" sx={{ mt: 3 }}>
              Max Keable
            </Typography>
            <Typography variant="h5" sx={{ mt: 2 }}>
              Full Stack Developer
            </Typography>
            <Typography variant="h6" sx={{ mt: 2 }}>
              (MERN)
            </Typography>
          </Box>
        </SlideReveal>
      </Box>
      <Box className="tiles">
        <SlideReveal delay={0.5}>
          <Box
            sx={{
              backgroundColor: `rgba(255, 255, 255, 0.2)`,
              borderRadius: "10px",
              display: "flex",
              width: "300px",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              p: 2,
              mt: 2,
            }}
          >
            <Grid container>
              <Grid item xs={4}>
                <Typography variant="h5">Country:</Typography>
                <Typography variant="h5" sx={{ mt: 3 }}>
                  City:
                </Typography>
                <Typography variant="h5" sx={{ mt: 3 }}>
                  Age:
                </Typography>
                <Typography variant="h5" sx={{ mt: 3 }}>
                  Phone:
                </Typography>
              </Grid>
              <Grid
                item
                xs={8}
                display="flex"
                flexDirection="column"
                alignItems="flex-end"
              >
                <Typography variant="h5">Australia</Typography>
                <Typography variant="h5" sx={{ mt: 3 }}>
                  Sunshine Coast
                </Typography>
                <Typography variant="h5" sx={{ mt: 3 }}>
                  {age}
                </Typography>
                <Typography variant="h5" sx={{ mt: 3 }}>
                  0438393157
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </SlideReveal>
      </Box>
    </Box>
  );
};

export default About;
