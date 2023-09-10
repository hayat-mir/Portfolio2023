import Icons from "../../icons/Icons";
import { useStyles } from "./Footer-style";
import { FaCoffee } from "react-icons/fa";

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Icons iconsClassName={classes.icons} />
      <FaCoffee
        className="font-color=blueexit
      "
      >
        buy me a coffee
      </FaCoffee>
      <p className={classes.copyright}>
        COPYRIGHT © 2023 <span className={classes.colorText}>HAYAT M. </span>{" "}
        ALL RIGHTS RESERVED
      </p>
    </footer>
  );
};

export default Footer;
