// import { makeStyles } from "@mui/styles";

// export const useStyles = makeStyles((theme) => ({
//   chip: {
//     margin: "0.1rem",
//     color: "white",
//   },
//   allChips: {
//     margin: "0.6rem 0.3rem",
//   },
//   card: {
//     margin: "3rem auto",
//     [theme.breakpoints.up("lg")]: {
//       display: "flex",
//       flexDirection: "row-reverse",
//     },
//   },
//   contentWrapper: {
//     [theme.breakpoints.only("md")]: {
//       width: "40%",
//     },
//     [theme.breakpoints.up("lg")]: {
//       minWidth: "560px",
//       display: "flex",
//       flexDirection: "column",
//       justifyContent: "space-between",
//     },
//   },
// }));

import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  chip: {
    margin: "0.1rem",
    color: "white",
  },
  allChips: {
    margin: "0.6rem 0.3rem",
  },
  card: {
    margin: "3rem auto",
    [theme.breakpoints.up("lg")]: {
      display: "flex",
      flexDirection: "row-reverse",
    },
  },
  contentWrapper: {
    [theme.breakpoints.only("md")]: {
      width: "30%",
    },
    [theme.breakpoints.up("lg")]: {
      minWidth: "660px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    // New styles for images
    "& img": {
      width: "10px", // Set a fixed width for images
      height: "10px", // Set a fixed height for images
      objectFit: "cover", // Ensure images cover the entire area
      margin: "0.5rem", // Optional: Add some space around the images
    },
  },
}));
