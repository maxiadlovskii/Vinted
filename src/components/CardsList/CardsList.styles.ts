import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  list: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill,minmax(400px, 1fr))",
    gridGap: theme.spacing(4),
    width: "100%",
    padding: theme.spacing(2),
    boxSizing: "border-box",
  },
  wrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(2),
    boxSizing: "border-box",
    height: "100vh",
    overflowY: "scroll",
  },
}));
