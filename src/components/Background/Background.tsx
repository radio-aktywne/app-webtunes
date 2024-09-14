import { Box } from "@mantine/core";
import { BackgroundProps } from "./Background.types";

import classes from "./Background.module.css";

export function Background(props: BackgroundProps) {
  return <Box className={classes.box} {...props} />;
}
