import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  svgHover: {
    fill: theme.palette.foreground.default,
    "&:hover": {
      fill: theme.palette.primary.main,
    },
    transition: "all 0.5s ease",
  },
}));

export const Logo = () => {
  const classes = useStyles();

  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      className={classes.svgHover}
    >
      <g id="Layer_1" data-name="Layer 1">
        {/* Vertical bar of L */}
        <rect x="50" y="30" width="20" height="120" rx="5" />
        {/* Horizontal base of L */}
        <rect x="50" y="130" width="80" height="20" rx="5" />
      </g>
    </svg>
  );
};
