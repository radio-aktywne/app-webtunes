import { Box } from "@mantine/core";
import { Background } from "../Background";
import { PageLayoutProps } from "./PageLayout.types";

import classes from "./PageLayout.module.css";

export function PageLayout(props: PageLayoutProps) {
  return (
    <Background>
      <Box className={classes.box} {...props} />
    </Background>
  );
}
