import "server-only";

import createClient from "openapi-fetch";
import type { paths } from "./types";

const scheme = process.env.WEBTUNES__EMITUNES__HTTP__SCHEME || "http";
const host = process.env.WEBTUNES__EMITUNES__HTTP__HOST || "localhost";
const port =
  process.env.WEBTUNES__EMITUNES__HTTP__PORT === undefined
    ? 42000
    : process.env.WEBTUNES__EMITUNES__HTTP__PORT;
const path = (process.env.WEBTUNES__EMITUNES__HTTP__PATH || "")
  // Ensure path starts with a slash
  .replace(/^(?!\/)(.*)$/, "/$1")
  // Remove trailing slashes
  .replace(/\/+$/, "");
const url = `${scheme}://${host}${port ? `:${port}` : ""}${path}`;

export const emitunes = createClient<paths>({ baseUrl: url });
