import { components } from "../../../api/pelican";

export type PlaylistListWidgetProps = {
  playlists: components["schemas"]["PlaylistList"];
  page: number;
  perPage: number;
};
