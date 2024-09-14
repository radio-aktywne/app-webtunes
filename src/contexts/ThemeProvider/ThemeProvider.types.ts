import { MantineProviderProps } from "@mantine/core";

export type ThemeProviderProps = Omit<
  MantineProviderProps,
  "theme" | "colorSchemeManager" | "defaultColorScheme"
>;
