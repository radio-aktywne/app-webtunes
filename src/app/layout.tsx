import { ColorSchemeScript } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import type { Metadata } from "next";
import { ReactNode } from "react";
import { PageLayout } from "../components";
import { colorSchemeStorageKey, defaultColorScheme } from "../config/constants";
import { labels } from "../config/labels";
import { ThemeProvider } from "../contexts";

export const metadata: Metadata = {
  title: labels.pages.index.title,
  description: labels.pages.index.description,
};

export type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript
          localStorageKey={colorSchemeStorageKey}
          defaultColorScheme={defaultColorScheme}
        />
        <link rel="shortcut icon" href="/favicon.svg?v=1" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <ThemeProvider>
          <Notifications position="top-right" />
          <PageLayout>{children}</PageLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
