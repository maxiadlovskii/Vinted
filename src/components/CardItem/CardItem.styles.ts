import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    height: "100%",
    position: "relative",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9,
    width: "100%",
  },
  content: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, .34)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  dash: {
    borderBottom: "2px solid  #fff",
    width: 100,
  },
}));
