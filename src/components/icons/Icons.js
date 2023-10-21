import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import CoffeeIcon from "@mui/icons-material/Coffee";
import clsx from "clsx";
import { useStyles } from "./Icons-style";

const iconStyle = {
  fill: "hsl(50, 100%, 70%)",
};
const Icons = (props) => {
  const classes = useStyles();
  return (
    <div className={clsx(classes.icons, props.iconsClassName)}>
      <a
        href="https://github.com/hayat-mir"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHubIcon fontSize="large" />
      </a>
      <a
        href="https://www.linkedin.com/in/hayat-m/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedInIcon fontSize="large" />
      </a>
      <a
        href="https://www.buymeacoffee.com/hayatm/e/176901"
        target="_blank"
        rel="noopener noreferrer"
      >
        <CoffeeIcon style={iconStyle} fontSize="large" />
      </a>
    </div>
  );
};

export default Icons;
