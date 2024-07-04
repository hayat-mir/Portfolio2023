import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  colorText: {
    backgroundColor: `${[theme.palette.primary.light]} !important`,
    fontWeight: "bold",
    marginBottom: "0.2rem",
    marginRight: "14rem",
  },
  colorrText: {
    backgroundColor: `${[theme.palette.primary.light]} !important`,
    fontWeight: "lighter",
    marginBottom: "0.2rem",
    marginRight: "24rem",
  },
  jobWrapper: {
    marginTop: "2rem !important",
    [theme.breakpoints.up("md")]: {
      width: "70%",
    },
  },
  description: {
    marginTop: "0.4rem !important",
  },
  listIcon: {
    marginTop: "0.01rem !important",
    minWidth: "35px !important",
  },
}));
