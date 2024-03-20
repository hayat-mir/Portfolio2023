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
            👋 Hello! I'm Mohammad Hayat, a data enthusiast with a passion for
            Python programming and its applications in Data Science, Machine
            Learning, and Deep Learning. My expertise lies in both supervised
            and unsupervised learning techniques, as well as feature
            engineering, math, and statistics.
          </Typography>
          <Typography className={classes.aboutText}>
            💻 Proficient in utilizing essential libraries such as pandas,
            numpy, Scikit-Learn, TensorFlow, Matplotlib, and Seaborn, I thrive
            in turning raw data into actionable insights. Additionally, I have
            hands-on experience with database management systems like SQL and
            MongoDB, along with adeptness in data visualization using tools like
            Power BI and Tableau. Let's turn data into meaningful stories
            together! 📊✨
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
