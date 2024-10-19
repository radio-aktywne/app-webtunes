---
slug: /config
title: Configuration
---

## Environment variables

You can configure the app at runtime using various environment variables:

- `LOTUS__SERVER__HOST` -
  host to run the server on
  (default: `0.0.0.0`)
- `LOTUS__SERVER__PORT` -
  port to run the server on
  (default: `43000`)
- `LOTUS__PELICAN__HTTP__SCHEME`
  scheme of the HTTP API of the pelican service
  (default: `http`)
- `LOTUS__PELICAN__HTTP__HOST`
  host of the HTTP API of the pelican service
  (default: `localhost`)
- `LOTUS__PELICAN__HTTP__PORT`
  port of the HTTP API of the pelican service
  (default: `42000`)
- `LOTUS__PELICAN__HTTP__PATH`
  path of the HTTP API of the pelican service
  (default: ``)
