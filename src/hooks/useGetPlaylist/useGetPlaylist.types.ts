import { GetPlaylistProps } from "../../actions";
import { components } from "../../api/pelican";

export type Playlist = components["schemas"]["playlists_models_Playlist"];

export type UseGetPlaylistProps = GetPlaylistProps & {
  interval?: number;
};
