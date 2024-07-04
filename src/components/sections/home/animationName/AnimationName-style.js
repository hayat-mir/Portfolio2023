import { makeStyles } from "@mui/styles";
export const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    width: "70vw",
    height: "15vh",
    margin: "auto",

    [theme.breakpoints.up("lg")]: {
      height: "20vh",
      width: "40vw",
    },
  },

  svg: {
    width: "auto", // Ensures the SVG fills its container
    maxWidth: "100%", // Ensures the SVG doesn't overflow
    alignSelf: "flex-start", // Aligns SVG to the start (adjust as needed)
    "& path": {
      stroke: "currentColor",
      strokeWidth: "5",
      fill: (props) =>
        props.isThemeChanged ? theme.palette.text.primary : "none", // Adjust fill color logic
    },
  },
}));

// export const useStyles = makeStyles((theme) => ({
//   wrapper: {
//     display: "flex",
//     flexDirection: "column",

//     width: "70vw",
//     height: "15vh",
//     margin: "auto",
//     [theme.breakpoints.up("lg")]: {
//       height: "20vh",
//       width: "40vw",
//       margin: "1px",
//     },
//   },

//   svg: {
//     width: "auto",
//     alignSelf: "flex-start",
//     "& path": {
//       stroke: "currentColor",
//       strokeWidth: "5",
//       fill: (props) =>
//         //If the theme has changed one or more times, the fill will be without animation - to prevent animation repetition
//         props.isThemeChanged ? [theme.palette.text.primary] : null,
//     },
//   },
// }));
