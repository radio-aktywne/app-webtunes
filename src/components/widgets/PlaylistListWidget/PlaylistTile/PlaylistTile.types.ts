import { components } from "../../../../api/pelican";

export type PlaylistTileLabels = {
  text: (id: string) => string;
};

export type PlaylistTileProps = {
  playlist: components["schemas"]["playlists_models_Playlist"];
  labels: PlaylistTileLabels;
};
