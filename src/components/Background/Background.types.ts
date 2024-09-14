import { BoxProps, ElementProps } from "@mantine/core";

export type BackgroundProps = Omit<
  BoxProps & ElementProps<"div", keyof BoxProps>,
  "className"
>;
