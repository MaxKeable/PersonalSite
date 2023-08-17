import { Box, Typography } from "@mui/material";
import "../tiles.css";
import { SlideReveal } from "./animations/SlideReveal";

const Technologies = (props: { isSkilled: Boolean }) => {
  const Learning = ["React Native", "C#", "3js"];

  const Skilled = [
    "TypeScript",
    "React",
    "Node",
    "Express",
    "Python",
    "Microsoft Azure",
    "Material UI",
  ];

  const calcDelay = (index: number) => {
    return index * 0.1;
  };

  return (
    <Box minHeight="150px" mb={2}>
      {props.isSkilled ? (
        <Box display="flex" flexWrap="wrap" maxWidth="1100px">
          {Skilled.map((tech, index) => (
            <Box className="tiles">
              <SlideReveal delay={calcDelay(index)}>
                <Box
                  key={tech}
                  sx={{
                    backgroundColor: `rgba(255, 255, 255, 0.2)`,
                    borderRadius: "15px",
                    py: 1,
                    px: 4,
                    mt: 2,
                    ml: 2,
                  }}
                >
                  <Typography variant="h5">{tech}</Typography>
                </Box>
              </SlideReveal>
            </Box>
          ))}
        </Box>
      ) : (
        <Box display="flex" flexWrap="wrap" maxWidth="1100px">
          {Learning.map((tech) => (
            <Box className="tiles">
              <Box
                key={tech}
                sx={{
                  backgroundColor: `rgba(255, 255, 255, 0.2)`,
                  borderRadius: "15px",
                  py: 1,
                  px: 4,
                  mt: 2,
                  ml: 2,
                }}
              >
                <Typography variant="h5">{tech}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default Technologies;
