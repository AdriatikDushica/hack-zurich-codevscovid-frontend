import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

const theme = createMuiTheme({
  overrides: {
    MuiAppBar: {
      root: {
        boxShadow: "none",
        borderBottom: "1px solid #E5E5E5",
      },
      colorPrimary: {
        backgroundColor: "white",
        color: "black",
      },
    },
    MuiButton: {
      root: {
        color: "#015C5D",
      },
      containedPrimary: {
        background: "linear-gradient(335.16deg, #015C5D 0%, #4C9077 100%)",
      },
    },
    MuiStepIcon: {
      active: {
        color: "#D38723 !important",
      },
      completed: {
        color: "#D38723 !important",
      },
    },
  },
});

export default theme;
