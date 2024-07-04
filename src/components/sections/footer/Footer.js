import Icons from "../../icons/Icons";
import { useStyles } from "./Footer-style";

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Icons iconsClassName={classes.icons} />

      <p className={classes.copyright}>
        COPYRIGHT © 2024{" "}
        <span className={classes.colorText}>Mohammad Hayat </span> ALL RIGHTS
        RESERVED
      </p>
    </footer>
  );
};

export default Footer;
