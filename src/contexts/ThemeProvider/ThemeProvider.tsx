"use client";

import { MantineProvider } from "@mantine/core";
import { defaultColorScheme } from "../../config/constants";
import { colorSchemeManager } from "../../config/scheme";
import { theme } from "../../config/theme";
import { ThemeProviderProps } from "./ThemeProvider.types";

import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";

export function ThemeProvider(props: ThemeProviderProps) {
  return (
    <MantineProvider
      theme={theme}
      colorSchemeManager={colorSchemeManager}
      defaultColorScheme={defaultColorScheme}
      {...props}
    />
  );
}
