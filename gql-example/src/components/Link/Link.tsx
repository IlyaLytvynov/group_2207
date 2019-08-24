import * as React from "react";
import { withStyles, WithStyles, Paper } from "@material-ui/core";
import styles from "./Link.styles"

interface LinkProps {
  id: string;
  url: string;
  description: string;
}

const Link: React.FC<LinkProps & WithStyles<typeof styles>> = ({
  url,
  classes
}) => {
  return (
    <Paper>
      <a className={classes.link} href={url} target="_blank">
        {url}
      </a>
    </Paper>
  );
};

const Container = withStyles(styles)(Link);

export { Container as Link };
