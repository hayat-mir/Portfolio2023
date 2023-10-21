import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  colorText: {
    backgroundColor: `${[theme.palette.primary.light]} !important`,
    fontWeight: "bold",
    marginBottom: "0.5rem",
  },
  // jobWrapper: {
  //   margin: "0 auto",
  //   [theme.breakpoints.up("md")]: {
  //     width: "70%",
  //   },
  // },
  description: {
    marginTop: "0.1rem !important",
  },
  listIcon: {
    marginTop: "0.1rem !important",
    minWidth: "5px !important",
  },
}));
