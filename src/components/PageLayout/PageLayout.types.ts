import { BoxProps, ElementProps } from "@mantine/core";

export type PageLayoutProps = Omit<BoxProps & ElementProps<"div">, "className">;
