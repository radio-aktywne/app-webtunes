import { ListMediaProps } from "../../actions";
import { components } from "../../api/emitunes";

export type MediaList = components["schemas"]["MediaList"];

export type UseListMediaProps = ListMediaProps & {
  interval?: number;
};
