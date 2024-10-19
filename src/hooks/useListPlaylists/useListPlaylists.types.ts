import { ListPlaylistsProps } from "../../actions";
import { components } from "../../api/pelican";

export type PlaylistList = components["schemas"]["PlaylistList"];

export type UseListPlaylistsProps = ListPlaylistsProps & {
  interval?: number;
};
