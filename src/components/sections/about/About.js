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
            👋 Hello!, I'm Mohammad Hayat, a Data Science enthusiast with
            expertise in Python, SQL, and data visualization tools. I excel in
            analyzing complex datasets and deriving actionable insights. I am
            eager to leverage my analytical skills and passion for learning to
            contribute meaningfully to the field of Data Science.📊
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
