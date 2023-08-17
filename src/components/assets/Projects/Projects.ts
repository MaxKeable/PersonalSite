import RosesImg1 from '../rosesimg1.png';
import RosesImg2 from '../rosesimg2.png';
import RosesImg3 from '../rosesimg3.png';
import GuitarImg1 from '../guitarimg1.png';
import GuitarImg2 from '../guitarimg2.png';
import GuitarImg3 from '../guitarimg3.png';
import BlockImg1 from '../blockimg1.png';
import BlockImg2 from '../blockimg2.png';
import BlockImg3 from '../blockimg3.png';

const Projects = [
    {
      name: "Roses Resturant",
      img1: RosesImg1,
      img2: RosesImg2,
      img3: RosesImg3,
      description: "A website for a resturant in Cooma NSW",
      technologies: ["React", "Material UI"],
      github: "https://github.com/MaxKeable/RosesResturantWebsite",
      live: "https://www.rosesrestaurant.com.au/",
    },
    {
      name: "Guitar Mate",
      img1: GuitarImg1,
      img2: GuitarImg2,
      img3: GuitarImg3,
      description: "A guitar tuning and learning application that utilises the web audio API to listen to a device's microphone. The pitch from the incoming audio is detected through using the DynamicWavelet algorithm. The pitch is then mapped to musical notes.",
      technologies: ["React", "Material UI", "Node", "Express", "MongoDB", "Web Audio API"],
      github: "https://github.com/MaxKeable/GutiarApp",
      live: "https://guitar-app.azurewebsites.net/",
    },
    {
      name: "Block Software",
      img1: BlockImg1,
      img2: BlockImg2,
      img3: BlockImg3,
      description: "A business website for a software company",
      technologies: ["React", "Material UI", "Node", "Express", "MongoDB"],
      github: "https://github.com/EvanCWoods/Block-Software-Business-Site",
      live: "https://www.blocksoftware.com.au/",
    },
  ];



  export default Projects;