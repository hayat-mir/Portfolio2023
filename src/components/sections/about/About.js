import { Container, Typography } from "@mui/material";
import { useStyles } from "./About-style";
import Title from "../../layout/Title";

const About = () => {
  const classes = useStyles();
  return (
    <Container id="about">
      <Title title="About me" />
      <div className={classes.aboutContent}>
        <div>
          <Typography className={classes.aboutText}>
            👋 Welcome to my website! I'm a passionate data science enthusiast
            with a knack for turning complex data into valuable insights. With a
            diverse portfolio of projects, I've mastered machine learning, data
            analysis, and image processing. Using tools like Python, TensorFlow,
            and Keras, I create predictive models and data-driven solutions that
            make a real impact. Explore my portfolio to see how I leverage the
            power of data to solve real-world problems and drive innovation.📊
          </Typography>
        </div>
        <img
          src={
            "https://res.cloudinary.com/dq6iduc79/image/upload/v1655203386/portfolio-avif/about5_j1mdia.webp"
          }
          alt="about me"
          className={classes.aboutImage}
        />
      </div>
    </Container>
  );
};

export default About;
