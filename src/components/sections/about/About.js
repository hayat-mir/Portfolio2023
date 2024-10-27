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
            👋 Welcome to my website! With experience in both industry and
            training, I’m passionate about turning data into actionable
            insights. Currently a Data Science Expert at Edurup School of
            Business, I empower learners with hands-on projects in machine
            learning, data preprocessing, and visualization tools like Python
            and Power BI. My previous role as a Data Analyst at Contechub
            Solutions saw me using advanced Excel, SQL, and Power BI to drive
            data quality, automate processes, and deliver real-time dashboards
            for data-driven decisions. Core Skills: Python, SQL, Power BI,
            Excel, Machine Learning, Data Analysis Certifications: AI Solution
            Architect, British Airways Data Science Simulation, SQL (5 Stars -
            HackerRank) Let’s connect and explore the world of data science
            together!📊
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
