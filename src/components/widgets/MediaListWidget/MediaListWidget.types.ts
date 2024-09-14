import { components } from "../../../api/emitunes";

export type MediaListWidgetProps = {
  media: components["schemas"]["MediaList"];
  page: number;
  perPage: number;
};
